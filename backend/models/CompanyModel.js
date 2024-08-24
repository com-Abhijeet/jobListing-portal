import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    description : String,
    website : String,
    location : String,
    logo :{
        type: String,
        required: true
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CompanyModel = mongoose.model('Company', CompanySchema);
export default CompanyModel;