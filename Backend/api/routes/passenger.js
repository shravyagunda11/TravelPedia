import express from 'express';
import { createPassenger, getAllPassenger } from '../controllers/passenger-controllers.js';
import { verifyAdmin } from '../Utilities/verifyTokens.js';

const router = express.Router();
//routing tocreate passgengers
router.post('/', createPassenger );
//Get all passengers
router.get('/',verifyAdmin, getAllPassenger );

export default router;