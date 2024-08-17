import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    dateOfEstablishment:{
        type: Date,
        required: false
    },
    companyType:{
        type: String,
        required: false
    },
    companySize:{
        type: Number,
        required: false
    },
    companyLogo : {
        type: String,
        required: false
    },
    companyDescription: {
        type: String,
        required: false
    },
    companyWebsite: {
        type: String,
        required: false
    },
    companyIndustry: {
        type: String,
        required: false
    },
    companyJobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobModel'
    }],
    companyRecruiters : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }]
});

const CompanyModel = mongoose.model('Company', CompanySchema);
export default CompanyModel;