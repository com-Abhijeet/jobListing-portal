import {Router} from 'express'
import { applyJob , getApplicationsByJobId, getApplicationsByUserId, updateApplicationStatus, deleteApplication } from '../controllers/ApplicationController.js'
import authenticateToken from '../middleware/authenticateToken.js'

const ApplicationRouter = Router()

ApplicationRouter.post('/create', authenticateToken, applyJob)
ApplicationRouter.get('/update/:id', authenticateToken, getApplicationsByJobId)
ApplicationRouter.get('/delete/:id', authenticateToken, getApplicationsByUserId)
ApplicationRouter.put('/get/:id', authenticateToken, updateApplicationStatus)
ApplicationRouter.delete('/delete/:id', authenticateToken, deleteApplication)

export default ApplicationRouter;
