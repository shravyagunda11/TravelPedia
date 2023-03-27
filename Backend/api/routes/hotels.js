import express from 'express';

import {createHotel,updateHotel,deleteHotel,getHotel,getAllHotels, countByType,getHotelRooms} from '../controllers/hotel-controllers.js';
import {verifyAdmin} from '../Utilities/verifyTokens.js'
import {countByCity} from '../controllers/hotel-controllers.js'


const router = express.Router();

//Inserting a new Post request 
router.post('/',createHotel );

//Upadting the contents using only ID
router.put('/:id',verifyAdmin ,updateHotel );

//Deleting the contents using the ID
router.delete('/:id',verifyAdmin ,deleteHotel );

//Getting the value using the respective ID
router.get('/:id', getHotel );

//Getting all the conetents present in that DB
router.get('/', getAllHotels );

router.get('/countBy/City', countByCity );
router.get('/countBy/Type', countByType );

router.get('/room/:id', getHotelRooms );


export default router;