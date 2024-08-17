import cors from "cors"
import express from "express";

import Database from "./config/database.js";

import UserRouter from "./routers/UserRouter.js";
import JobRouter from "./routers/JobRouter.js";
import CompanyRouter from "./routers/CopanyRouter.js";
import ApplicationRouter from "./routers/ApplicationRouter.js";

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


app.use('/api/v1/User', UserRouter);
app.use('/api/v1/Job', JobRouter);
app.use('/api/v1/Company' , CompanyRouter);
app.use('/api/v1/Application', ApplicationRouter );

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});