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
      status,
    });

    const application = await newApplication.save();
    console.log('applied');

    // Update the user's jobApplications array
    await UserModel.findByIdAndUpdate(user, {
      $push: { jobApplications: { jobID: jobId, status: status } },
    });
    console.log('Updated user application successfully');

    // Update the job's applicants array
    await JobModel.findByIdAndUpdate(jobId, {
      $push: { applicants: user },
    });
    console.log('Updated Job application successfully');
    console.log('Application Created Successfully');

    res.status(201).json({
      message: 'Applied SuccessFully',
      application,
    });
  } catch (error) {
    console.log('ERROR IN CREATING APPLICATION _-_-_-_', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};
export const getApplicationsByJobId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const applications = await ApplicationModel.find({ job: id })
      .populate('applicant', 'fullName email contact resume') // Populate applicant with name and email
      .populate('job', 'jobTitle description'); // Populate job with title and description

    console.log('Application * * ** * ** * * *', applications);
    res.status(200).json({
      message: 'Applications fetched successfully',
      applications,
    });
  } catch (error) {
    console.log('ERROR IN FETCHING APPLICATIONS _-_-_-_', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

export const getApplicationsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const applications = await ApplicationModel.find({ applicant: id })
      .populate('job', 'jobTitle')
      .populate('company', 'companyName'); // Populate job with title and description

    res.status(200).json({
      message: 'Applications fetched successfully',
      applications,
    });
  } catch (error) {
    console.log('ERROR IN FETCHING APPLICATIONS _-_-_-_', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Request Params:', req.params);
    const { status } = req.body;
    console.log('Request Body:', req.body);

    if (!status || !['Accepted', 'Rejected', 'Applied'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const application = await ApplicationModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    application.status = status;
    await application.save();

    console.log('Application status set', status);

    res.status(200).json({
      message: 'Application updated successfully',
      application,
    });
  } catch (error) {
    console.log('ERROR IN UPDATING APPLICATION _-_-_-_', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const applicationId = req.body;

    await ApplicationModel.findByIdAndDelete({ _id: applicationId });
    res.status(200).json({
      message: 'Application deleted successfully',
    });
  } catch (error) {
    console.log('ERROR IN DELETING APPLICATION _-_-_-_', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

export const sendOfferLetter = async (req, res) => {
  try {
    const { id } = req.params;
    // Optionally handle the request body if you need to include additional data
    // const { offerLetter } = req.body;

    // Find the application by ID and update it with the offer letter
    const application = await ApplicationModel.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Perform necessary logic to send the offer letter
    // e.g., update application with the offer letter or perform an email action

    res.status(200).json({
      message: 'Offer letter sent successfully',
      application,
    });
  } catch (error) {
    console.log('ERROR IN SENDING OFFER LETTER _-_-_-_', error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};
