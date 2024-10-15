import {connect} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Database = async() =>{
    try {
        await connect(process.env.MONGO_URL);
        console.log("Connection to MongoDb Successful");
    } catch (error) {
        console.log("Database connection failed" , error);
    }
}

export default Database;