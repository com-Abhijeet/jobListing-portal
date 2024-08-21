import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    jobRole : {
        type: String,
        required : true
    },
    minSalary: {
        type: Number,
        required: true
    },
    maxSalary : {
        type: Number,
        required : true
    },
    vacancies : {
        type: Number,
        required : true
    },
    jobLevel : {
        type: String,
        required : true
    },
    locationCountry: {
        type: String,
        required: true
    },
    locationCity: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    skills: [{
        skillName: String,
        skillLevel: String
    }],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    applicants : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'UserModel'
    },
    status : {
        type: String,
        default: "active"
    },
    selected : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },

})
const JobModel = mongoose.model('Job', JobSchema);

export default JobModel;