import ApplicationModel from '../models/ApplicationModel.js'

export const applyJob = async(req , res) =>{
    try{
        const {
            job,
            company,
            user,
            status
        } = req.body
        
        const newApplication = new ApplicationModel({
            job,
            company,
            user,
            status
        });

        const application = await newApplication.save();
        console.log("Application Created Successfully");
        res.status(201).json({
            message: "Application Created Successfully",
            application
        });

    }catch(error){
        console.log("ERROR IN CREATING APPLICATION _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

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


