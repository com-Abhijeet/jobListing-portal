import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createToken = (id ,name) =>{
    const JWT_SECRET = process.env.TOKEN_SECRET;
    return jwt.sign({id, name}, JWT_SECRET, {
        expiresIn: '1d'
    })
}