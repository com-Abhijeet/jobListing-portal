import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  updateUserProfile,
  getUserProfile,
} from '../controllers/UserController.js';
import express from 'express';
import upload from '../middleware/multer.js';
import authenticateToken from '../middleware/authenticateToken.js';

const UserRouter = express.Router();

UserRouter.post('/register', upload.single('file'), registerUser);
UserRouter.post('/login', loginUser);
UserRouter.post('/forgotPassword', forgotPassword);
UserRouter.post('/resetPassword', resetPassword);
UserRouter.get('/get', authenticateToken, getUserProfile);
UserRouter.put(
  '/update',
  upload.single('file'),
  updateUserProfile,
  upload.fields([
    { name: 'file', maxCount: 1 },
    { name: 'profilePicture', maxCount: 1 },
  ]),
  (req, res) => {
    try {
      // Process the request here
      // req.files will contain the uploaded files
      res.status(200).send({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  }
);

export default UserRouter;
