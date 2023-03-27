import express from 'express';

import {verifyAdmin} from '../Utilities/verifyTokens.js'
import { createSeats, getFlightSeats, updateFlightSeats } from '../controllers/seats-controller.js';

const router = express.Router();
//routing to the respective creating seats
router.post('/:flightid', verifyAdmin ,createSeats );
//routing to the respective getting seats
router.get('/:id', getFlightSeats );
//routing to the respective availablilty seats
router.put('/availability/:id', updateFlightSeats );

export default router;
