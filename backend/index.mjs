import Database from "./config/database.js";
import cors from "cors"
import express from "express";
import UserRouter from "./routers/UserRouter.js";
const app = express();
const PORT = 3000; 
Database();

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json()); 


app.use('/User', UserRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});