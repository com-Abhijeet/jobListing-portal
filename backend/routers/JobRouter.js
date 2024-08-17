import {
    createJob , updateJob, deleteJob, getJob, getAllJobs
} from "../controllers/JobController.js"

import express from "express";
import authenticateToken from "../middleware/authenticateToken.js";

const JobRouter = express.Router();
// Create a new job
JobRouter.post("/create", authenticateToken, createJob);
JobRouter.put("/update", authenticateToken ,updateJob);
JobRouter.delete("/delete/:id", authenticateToken, deleteJob);
JobRouter.get("/get/:id",authenticateToken, getJob);
JobRouter.get("/getAll",authenticateToken, getAllJobs);

export default JobRouter;