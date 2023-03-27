import express from 'express';

import {createFlight, deleteFlight, getAllFlight, getFlight, updateFlight} from '../controllers/flight-controller.js'


import {verifyAdmin} from '../Utilities/verifyTokens.js'

const router = express.Router();

//Inserting a new Post request 
router.post('/', verifyAdmin ,createFlight );

//Upadting the contents using only ID
router.put('/:id',verifyAdmin ,updateFlight );

//Deleting the contents using the ID
router.delete('/:id',verifyAdmin ,deleteFlight );

//Getting the value using the respective ID
router.get('/:id', getFlight );

//Getting all the conetents present in that DB
router.get('/', getAllFlight );



export default router;