import room from './../models/rooms.js';
import hotel from './../models/hotels.js';
import { createErrors } from '../Utilities/errors.js';
//Creating rooms 
export const createRooms = async (req,res,next)=>{

    const hotelId= req.params.hotelid;
    const newRoom = new room(req.body);

    try {
        const saveRoom = await newRoom.save();
        try {
            await hotel.findByIdAndUpdate(hotelId,{$push:{rooms:saveRoom._id}})
        } catch (error) {
            next(error);
        }
        res.status(200).json(saveRoom);
    } catch (error) {
        next(error);
    }

} 

//Upadting the contents using only ID
export const updateRoomAvailability = async (req,res,next) =>{

    try {
        await room.updateOne({"roomnumbers._id":req.params.id},{$push :{
            "roomnumbers.$.unavailableDates":req.body.dates
            },
        }
        
    );
        res.status(200).json("Room Status has been Updated");

    } catch (error) {
        next(error);
    }
    
}
//updating the rooms 
export const updateRooms = async (req,res,next) =>{

    try {
        const updatedRoom = await room.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
        res.status(200).json(updatedRoom);

    } catch (error) {
        next(error);
    }
    
}

//Deleting the contents using the ID
export const deleteRooms = async (req,res,next) =>{
    const hotelId= req.params.hotelid;
    try {
        await room.findByIdAndDelete(req.params.id)
        try {
            await hotel.findByIdAndDelete(hotelId,{$pull:{rooms:req.params.id}})
        } catch (error) {
            next(error);
        }
        res.status(200).json("Room Deleted Successfully");

    } catch (error) {
        next(error);
    }
    
}

//Getting the value using the respective ID
export const getRooms = async (req,res,next) =>{

    try {
        const selectedRoom=await room.findById(req.params.id);
        res.status(200).json(selectedRoom);

    } catch (error) {
        next(error)
    }
    
}

//Getting all the conetents present in that DB
export const getAllRooms = async (req,res,next) =>{

    try {
        const roomsList=await room.find();
        res.status(200).json(roomsList);

    } catch (error) {
        next(error);
    }
    
}