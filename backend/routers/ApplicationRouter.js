import {Router} from 'express'
import { applyJob , getApplicationsByJobId, getApplicationsByUserId, updateApplicationStatus, deleteApplication } from '../controllers/ApplicationController.js'
import authenticateToken from '../middleware/authenticateToken.js'

const ApplicationRouter = Router()

ApplicationRouter.post('/apply/:jobId', authenticateToken, applyJob)
ApplicationRouter.get('/applicants/:id', authenticateToken, getApplicationsByJobId)
ApplicationRouter.put('/status/update/:id', authenticateToken, updateApplicationStatus)
ApplicationRouter.delete('/delete/:id', authenticateToken, deleteApplication)

export default ApplicationRouter;
