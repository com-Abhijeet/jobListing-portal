import JobModel from "../models/JobModel.js";
import CompanyModel from "../models/CompanyModel.js";

export const createJob = async(req , res) =>{
    try{
        const {
            jobTitle,
            description,
            skills,
            salary,
            location,
            jobType,
            experience,
            position,
            companyId,
            createdBy
        } = req.body

        const newJob = new JobModel({
            jobTitle,
            description,
            skills,
            salary,
            location,
            jobType,
            experience,
            vacancies : position,
            companyId,
            createdBy

        });

        const job = await newJob.save();
        console.log("Job Created Successfully" , job);
        res.status(200).json({
            message: "Job Created Successfully",
            job
        });

    }catch(error){
        console.log("ERROR IN CREATING JOB * * * * * * * * *", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const updateJob = async(req , res) => {
    try{
        const {
            jobTitle,
            description,
            tags,
            jobRole,
            salary,
            vacancies,
            jobLevel,
            locationCountry,
            locationCity,
            employmentType,
            experience,
            skills
        } = req.body

        const job = await JobModel.findOneAndUpdate({_id: req.params.id}, {
            jobTitle,
            description,
            tags,
            jobRole,
            salary,
            vacancies,
            jobLevel,
            locationCountry,
            locationCity,
            employmentType,
            experience,
            skills
        }, {new: true});

        console.log("Job Updated Successfully");
        res.status(200).json({
            message: "Job Updated Successfully",
            job
        });

    }catch(error){
        console.log("ERROR IN UPDATING JOB * * * * * * * * *", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const deleteJob = async(req , res) => {
    try{
        const job = await JobModel.findOneAndDelete({_id: req.params.id});
        console.log("Job Deleted Successfully");
        res.status(200).json({
            message: "Job Deleted Successfully",
            job
        });

    }catch(error){
        console.log("ERROR IN DELETING JOB * * * * * * * * *", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const getJob = async(req , res) => {
    try{
        const job = await JobModel.findOne({_id: req.params.id});
        
        console.log("Job Found Successfully" , job);
        res.status(200).json({
            message: "Job Found Successfully",
            job
        });

    }catch(error){
        console.log("ERROR IN GETTING JOB * * * * * * * * *", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const getAllJobs = async(req , res) => {
    try{
        const jobs = await JobModel.find()
                                    .populate('companyId');;
        console.log("All Jobs Found Successfully", jobs) 
                            
        res.status(200).json({
            message: "All Jobs Found Successfully",
            jobs
        });

    }catch(error){
        console.log("ERROR IN GETTING ALL JOBS * * * * * * * * *", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    };
}

export const getAdminJobs = async(req , res) => {
    try{
        const jobs = await JobModel.find({postedBy: req.user._id})
                                   .populate('companyId')
                                   .select('jobTitle description salary vacancies location experience skills createdBy companyId applicants status createdAt');
        console.log("JOBS FOR ADMIN * * ** * * ** ", jobs);
        res.status(200).json({
            message: "Admin Jobs Found Successfully",
            jobs
        });

    }catch(error){
        console.log("ERROR IN GETTING ADMIN JOBS * * * * * * * * *", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}