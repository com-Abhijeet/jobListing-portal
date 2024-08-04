import { registerUser, loginUser, forgotPassword, resetPassword } from "../controllers/UserController.js";
import express from "express";

const UserRouter = express.Router();

UserRouter.post('/register', registerUser);
UserRouter.post('/login', loginUser);
UserRouter.post('/forgotPassword' , forgotPassword)
UserRouter.post('/resetPassword' , resetPassword)

export default UserRouter;