import { Router } from 'express';
import *as authController from '../controllers/auth.controller.js'

const authRouter = Router();


// POST  /api/auth/regidter
authRouter.post("/register", authController.register)

export default authRouter;