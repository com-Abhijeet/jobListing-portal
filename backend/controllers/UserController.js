import UserModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import { createToken } from '../helper/createToken.js';
import { sendOTPEmail } from '../Mailer/sendOtpEmail.js';
import { uploadResume } from '../helper/uploadResume.js';
import { sendRegisterSuccessMail } from '../Mailer/sendRegisterSuccessMail.js';

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, contact, role } = req.body;

    console.log('Request body', req.body);

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const isUser = await UserModel.findOne({ email: email });
    if (isUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    if (!req.file) {
      console.log('File not found');
      return res.status(400).json({
        message: 'Resume file is required',
      });
    }

    const { buffer, mimetype } = req.file;
    const resumeBuffer = buffer;
    const resumeUrl = await uploadResume(fullName, resumeBuffer, 'resume');

    const user = new UserModel({
      fullName,
      email,
      password: hashedPassword,
      contact,
      role,
      resume: resumeUrl,
    });

    console.log('Updated User', user);

    await user.save();
    res.status(201).json({
      message: 'User Registered Successfully',
    });

    console.log('User Registered Successfully');
    sendRegisterSuccessMail({ recipient_email: email, fullName });
  } catch (error) {
    console.error('Error in registering User:', error);
    res.status(500).json(error);
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUser = await UserModel.findOne({ email });
    const name = isUser.fullName;

    if (!isUser) {
      res.status(404).json({
        message: 'User not found',
      });
    } else {
      const isPassword = await bcrypt.compare(password, isUser.password);
      if (isPassword) {
        const token = createToken(isUser._id, isUser.fullName);
        console.log('Generated token', token);

        res.cookie('token', token, {
          httpOnly: false,
          maxAge: 24 * 60 * 60 * 1000,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'Strict',
        });
        console.log('Token set in Cokkie');
        res.status(200).json({
          message: 'Login successful',
          token,
          name,
        });
      } else {
        res.status(400).json({
          message: 'Invalid credentials',
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: ' Internal Server Error',
      error,
    });
  }
};
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      res.status(404).json({
        message: 'User not found',
      });
    } else {
      const OTP = Math.floor(100000 + Math.random() * 900000);
      user.Otp = OTP;
      user.OtpExpiry = Date.now() + 300000;

      await user.save();
      await sendOTPEmail({ recipient_email: email, OTP });
      res.status(200).json({
        message: 'OTP sent successfully',
      });
    }
  } catch (error) {
    console.log('Error in forgot Password', error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
export const resetPassword = async (req, res) => {
  try {
    const { email, OTP, newPassword } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: 'User not found',
      });
    } else {
      if (user.Otp === OTP && user.OtpExpiry > Date.now()) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;

        await user.save();
        res.status(200).json({
          message: 'Password reset successful',
        });
      } else {
        res.status(400).json({
          message: 'Invalid OTP',
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
