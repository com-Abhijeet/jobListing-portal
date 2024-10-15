import cors from 'cors';
import express from 'express';

import Database from './config/database.js';

import UserRouter from './routers/UserRouter.js';
import JobRouter from './routers/JobRouter.js';
import CompanyRouter from './routers/CopanyRouter.js';
import ApplicationRouter from './routers/ApplicationRouter.js';

const app = express();

const PORT = 3000;

Database();

const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/user', UserRouter);
app.use('/api/v1/job', JobRouter);
app.use('/api/v1/company', CompanyRouter);
app.use('/api/v1/application', ApplicationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
