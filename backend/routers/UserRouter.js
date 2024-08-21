import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  updateUserProfile,
  getUserProfile
} from '../controllers/UserController.js';
import express from 'express';
import upload from '../middleware/multer.js';
import authenticateToken from "../middleware/authenticateToken.js";

const UserRouter = express.Router();

UserRouter.post('/register', upload.single('file'), registerUser);
UserRouter.post('/login', loginUser);
UserRouter.post('/forgotPassword', forgotPassword);
UserRouter.post('/resetPassword', resetPassword);
UserRouter.get('/get',authenticateToken, getUserProfile);
UserRouter.put('/update', upload.single('file'), updateUserProfile)

export default UserRouter;
