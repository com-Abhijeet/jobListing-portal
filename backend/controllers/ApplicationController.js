import ApplicationModel from '../models/ApplicationModel.js';
import UserModel from '../models/UserModel.js';
import JobModel from '../models/JobModel.js';

export const applyJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const { user, status } = req.body;

        // Create a new application
        const newApplication = new ApplicationModel({
            job: jobId,
            applicant: user,
            status
        });

        const application = await newApplication.save();
        console.log("applied");

        // Update the user's jobApplications array
        await UserModel.findByIdAndUpdate(user, {
            $push: { jobApplications: { jobID: jobId, status: status } }
        });
        console.log("Updated user application successfully");

        // Update the job's applicants array
        await JobModel.findByIdAndUpdate(jobId, {
            $push: { applicants: user }
        });
        console.log("Updated Job application successfully");
        console.log("Application Created Successfully");

        res.status(201).json({
            message: "Applied SuccessFully",
            application
        });

    } catch (error) {
        console.log("ERROR IN CREATING APPLICATION _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
};
export const getApplicationsByJobId = async(req , res) =>{
    try{
        const jobId = req.body;

        const applications = await ApplicationModel.find({job : jobId});
        res.status(200).json({
            message: "Applications fetched successfully",
            applications
        });
    }catch(error){
        console.log("ERROR IN FETCHING APPLICATIONS _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const getApplicationsByUserId = async(req , res) =>{
    try{
        const userId = req.body;

        const applications = await ApplicationModel.find({user : userId});
        res.status(200).json({
            message: "Applications fetched successfully",
            applications
        });
    }catch(error){
        console.log("ERROR IN FETCHING APPLICATIONS _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const updateApplicationStatus = async(req , res) =>{
    try{
        const {applicationId , status} = req.body;

        const application = await ApplicationModel.findById({applicationId});
        application.status = status;
        await application.save();
        res.status(200).json({
            message: "Application updated successfully",
            application
        });
    }catch(error){
        console.log("ERROR IN UPDATING APPLICATION _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const deleteApplication = async(req , res) =>{
    try{
        const applicationId = req.body;

        await ApplicationModel.findByIdAndDelete({_id : applicationId});
        res.status(200).json({
            message: "Application deleted successfully"
        });
    }catch(error){
        console.log("ERROR IN DELETING APPLICATION _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}


