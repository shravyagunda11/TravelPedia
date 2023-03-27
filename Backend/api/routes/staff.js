import express from 'express';
import { verifyAdmin } from '../Utilities/verifyTokens.js';
import {createStaff, getAllStaff} from '../controllers/staff-controller.js'
import {deleteStaff} from '../controllers/staff-controller.js'
import {getStaff} from '../controllers/staff-controller.js'

const router = express.Router();

//Inserting a new Post request 
router.post('/', createStaff );

//Getting all the conetents present in that DB
router.get('/',  getAllStaff );

//Deleting the contents using the ID
router.delete('/:id', deleteStaff );

//Getting the value using the respective ID
router.get('/:id', getStaff );



export default router;