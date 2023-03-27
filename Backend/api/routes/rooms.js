import express from 'express';
import {createRooms,updateRooms,deleteRooms,getRooms,getAllRooms,updateRoomAvailability} from '../controllers/rooms-controllers.js'
import {verifyAdmin} from '../Utilities/verifyTokens.js'

const router = express.Router();


//Inserting a new Post request 
router.post('/:hotelid', verifyAdmin ,createRooms );

//Upadting the contents using only ID
router.put('/availability/:id', updateRoomAvailability);

router.put('/:id',verifyAdmin , updateRooms);

//Deleting the contents using the ID
router.delete('/:id/:hotelid',verifyAdmin ,deleteRooms );

//Getting the value using the respective ID
router.get('/:id', getRooms );

//Getting all the conetents present in that DB
router.get('/', getAllRooms );



export default router;