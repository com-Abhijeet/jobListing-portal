import { registerUser, loginUser, forgotPassword, resetPassword } from "../controllers/UserController.js";
import express from "express";
import upload from "../middleware/multer.js";
// import authenticateToken from "../middleware/authenticateToken.js";

const UserRouter = express.Router();

UserRouter.post('/register',upload.single('resume'), registerUser);
UserRouter.post('/login', loginUser);
UserRouter.post('/forgotPassword' , forgotPassword)
UserRouter.post('/resetPassword' , resetPassword)

export default UserRouter;