import mongoose from 'mongoose';

const ApplicationsSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['Applied', 'Accepted', 'Rejected'],
    default: 'Applied',
    required: true,
  },
  applicationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
});

const ApplicationModel = mongoose.model('Application', ApplicationsSchema);

export default ApplicationModel;
