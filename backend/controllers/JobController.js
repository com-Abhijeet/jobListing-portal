import JobModel from "../models/JobModel.js";
import ApplicationModel from "../models/ApplicationModel.js";

export const createJob = async(req , res) =>{
    try{
        const {
            jobTitle,
            description,
            tags,
            jobRole,
            minSalary,
            maxSalary,
            vacancies,
            jobLevel,
            locationCountry,
            locationCity,
            employmentType,
            experience,
            skills,
            postedBy
        } = req.body

        const newJob = new JobModel({
            jobTitle,
            description,
            tags,
            jobRole,
            minSalary,
            maxSalary,
            vacancies,
            jobLevel,
            locationCountry,
            locationCity,
            employmentType,
            experience,
            skills,
            postedBy
        });

        const job = await newJob.save();
        console.log("Job Created Successfully");
        res.status(201).json({
            message: "Job Created Successfully",
            job
        });

    }catch(error){
        console.log("ERROR IN CREATING JOB _-_-_-_", error);
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
            minSalary,
            maxSalary,
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
            minSalary,
            maxSalary,
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
        console.log("ERROR IN UPDATING JOB _-_-_-_", error);
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
        console.log("ERROR IN DELETING JOB _-_-_-_", error);
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
        console.log("ERROR IN GETTING JOB _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const getAllJobs = async(req , res) => {
    try{
        const jobs = await JobModel.find();
        console.log("All Jobs Found Successfully");
        res.status(200).json({
            message: "All Jobs Found Successfully",
            jobs
        });

    }catch(error){
        console.log("ERROR IN GETTING ALL JOBS _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
};

export const getJobsByTags = async(req,res) => {
    try{
        const jobs = await JobModel.find({tags: req.params.tags});
        console.log("Jobs Found Successfully");
        res.status(200).json({
            message: "Jobs Found Successfully",
            jobs
        });

    }catch(error){
        console.log("ERROR IN GETTING JOBS BY TAGS _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const getJobsByRole = async(req,res) => {
    try{
        const jobs = await JobModel.find({jobRole: req.params.role});
        console.log("Jobs Found Successfully");
        res.status(200).json({
            message: "Jobs Found Successfully",
            jobs
        });

    }catch(error){
        console.log("ERROR IN GETTING JOBS BY ROLE _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

export const getJobsBySearch = async(req,res) =>{
    try{
        const jobs = await JobModel.find({$text: {$search: req.params.search}});
        console.log("Jobs Found Successfully");
        res.status(200).json({
            message: "Jobs Found Successfully",
            jobs
        });

    }catch(error){
        console.log("ERROR IN GETTING JOBS BY SEARCH _-_-_-_", error);
        res.status(500).json({
            message: "Internal server error" , error
        });
    }
}

