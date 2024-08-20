import mongoose from 'mongoose'

const ApplicationsSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobModel',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Applied"
    },
    applicationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const ApplicationModel = mongoose.model('Application', ApplicationsSchema);

export default ApplicationModel;