import express from 'express';
import { register,login,subscribeEmail } from '../controllers/authentication-controllers.js';

const router = express.Router();

//Registering a user 
router.post('/register', register );

//Login User
router.post('/login', login );

//Subscribe Emails
router.post('/email' , subscribeEmail );

export default router;