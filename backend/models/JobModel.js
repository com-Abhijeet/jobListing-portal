import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    salary : {
        type: Number,
        required : false
    },
    vacancies : {
        type: Number,
        required : false
    },
    location: {
        type: String,
        required: false
    },
    employmentType: { //jobType
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    skills: [{
        type: String,
        required: false
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
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