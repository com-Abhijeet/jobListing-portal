import { Router } from 'express';

import {
  applyJob,
  getApplicationsByJobId,
  getApplicationsByUserId,
  updateApplicationStatus,
  deleteApplication,
  sendOfferLetter,
} from '../controllers/ApplicationController.js';
import authenticateToken from '../middleware/authenticateToken.js';
const ApplicationRouter = Router();

ApplicationRouter.post('/apply/:jobId', authenticateToken, applyJob);
ApplicationRouter.get(
  '/applicants/:id',
  authenticateToken,
  getApplicationsByJobId
);
ApplicationRouter.put(
  '/status/update/:id',
  authenticateToken,
  updateApplicationStatus
);
ApplicationRouter.delete('/delete/:id', authenticateToken, deleteApplication);
ApplicationRouter.get(
  '/user/get/:id',
  authenticateToken,
  getApplicationsByUserId
);
// Send offer letter
ApplicationRouter.post(
  '/send-offer-letter/:id',
  authenticateToken,
  sendOfferLetter
);
// ApplicationRouter.post('/offer/letter/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Implement sending logic here
//     res.status(200).json({ message: 'Offer letter sent successfully' });
//   } catch (error) {
//     console.error('Error sending offer letter:', error);
//     res.status(500).json({ message: error.message });
//   }
// });

export default ApplicationRouter;
