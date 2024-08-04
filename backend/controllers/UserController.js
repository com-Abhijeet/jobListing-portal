import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt'
import { createToken } from "../helper/createToken.js";
import sendEmail from "../helper/sendEmail.js";

export const registerUser = async(req, res) => {
    try{
        const {
            fullName, 
            email,
            password,
            contact,
            address,
            dateOfBirth,
            gender,
            education,
            role,
            resume,
            employmentStatus,
            skills,
            experience
        } = req.body

        console.log(req.body);

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password,salt)
        
        const isUser = await UserModel.findOne({email : email});
        if(isUser){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const user = new UserModel({
            fullName,
            email,
            password : hashedPassword,
            contact,
            address,
            dateOfBirth,
            gender,
            education,
            role,
            resume,
            employmentStatus,
            skills,
            experience
        });

        await user.save();
        res.status(201).json({
            message: "User Registered Successfully", user
        });
        
        console.log("User Registered Successfully");

    }catch(error){
        console.log("Error in registering User : ", error);
        res.status(500).json({
            message : "Internal Server Error"}, 
            error);
    }
}
export const loginUser = async (req, res) =>{
    try{
        const {
            email, 
            password
        } = req.body
        
        const isUser = await UserModel.findOne({email});
        const name = isUser.fullName;
        
        if(!isUser){
            res.status(404).json({
                message: 'User not found'
            })
        }
        else{
            const isPassword = await bcrypt.compare(password, isUser.password);
            if(isPassword){  
                const token = createToken(isUser._id, isUser.fullName);
                console.log("Generated token" , token);
                  
                res.cookie('token', token, {
                    httpOnly: false,
                    maxAge: 24*60*60*1000,
                    secure : process.env.NODE_ENV === 'production',
                    sameSite: 'Strict'
                    
                });
                console.log("Token set in Cokkie");
                res.status(200).json({
                    message: 'Login successful',
                    token,
                    name
                });

            }
            else{
                res.status(400).json({
                    message: 'Invalid credentials'
                })
            }
        }
    }catch(error){
        res.status(500).json({
            message: ' Internal Server Error' , error
        })
        console.log(error);
    }
}
export const forgotPassword = async(req,res)=>{
    try{
        const {email} = req.body
        const user = await UserModel.findOne({email : email});
        if(!user){
            res.status(404).json({
                message: "User not found"
            })
        }
        else{
            const OTP = Math.floor(100000 + Math.random() * 900000);
            user.Otp = OTP;
            user.OtpExpiry = Date.now() + 300000;

            await user.save();
            await sendEmail({recipient_email: email, OTP});
            res.status(200).json({
                message: "OTP sent successfully"
            })

        }

    }
    catch(error){
        console.log("Error in forgot Password", error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export const resetPassword = async (req, res) => {
    try {
        const { email, OTP, newPassword } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.status(404).json({
                message: "User not found"
            });
        } else {
            if (user.Otp === OTP && user.OtpExpiry > Date.now()) {
                const saltRounds = 10;
                const salt = await bcrypt.genSalt(saltRounds);
                const hashedPassword = await bcrypt.hash(newPassword, salt);
                user.password = hashedPassword;
                await user.save();
                res.status(200).json({
                    message: "Password reset successful"
                });
            } else {
                res.status(400).json({
                    message: "Invalid OTP"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};