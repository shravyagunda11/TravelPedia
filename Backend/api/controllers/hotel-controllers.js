import Hotel from './../models/hotels.js';
import Room from './../models/rooms.js';
import {createErrors} from '../Utilities/errors.js'

//Inserting a new Post request 
export const createHotel = async (req,res,next) =>{

    const newHotel =await new Hotel(req.body);

    try {
        const saveHotel =await newHotel.save();
        res.status(200).json(saveHotel);

    } catch (error) {
        next(error);
    }
}

//Upadting the contents using only ID
export const updateHotel = async (req,res,next) =>{

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
        res.status(200).json(updatedHotel);

    } catch (error) {
        next(error);
    }
    
}

//Deleting the contents using the ID
export const deleteHotel = async (req,res,next) =>{

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel Deleted Successfully");

    } catch (error) {
        next(error);
    }
    
}

//Getting the value using the respective ID
export const getHotel = async (req,res,next) =>{

    try {
        const selectedHotel=await Hotel.findById(req.params.id);
        res.status(200).json(selectedHotel);

    } catch (error) {
        next(error)
    }
    
}

//Getting all the conetents present in that DB
export const getAllHotels = async (req,res,next) =>{

    const {min, max, ...others}=req.query
    try {
        const hotelsList=await Hotel.find(
            {...others,
                cheapestPrice:{$gt:min || 1, $lt : max || 999}
            }).limit(req.query.limit);
        res.status(200).json(hotelsList);

    } catch (error) {
        next(error);
    }
    
}
//coutig the citys
export const countByCity = async (req,res,next) =>{

    const cities =req.query.cities.split(",");
    try {
        const cityhotelsList=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(cityhotelsList);

    } catch (error) {
        next(error);
    }
    
}
//counting the type 
export const countByType = async (req,res,next) =>{

   
    try {
        const hotelCount = await Hotel.countDocuments({type:"Hotel"});
        const apartmentCount = await Hotel.countDocuments({type:"Apartment"});
        const resortCount = await Hotel.countDocuments({type:"Resort"});
        const villaCount = await Hotel.countDocuments({type:"Villa"});
        const cabinCount = await Hotel.countDocuments({type:"Cabin"});

        res.status(200).json([
            {type:"hotel", count: hotelCount},
            {type:"apartment", count: apartmentCount},
            {type:"resort", count: resortCount},
            {type:"villa", count: villaCount},
            {type:"cabin", count: cabinCount},
        ]);

    } catch (error) {
        next(error);
    }
    
}
//getting the hotle woth rooms 
export const getHotelRooms = async (req,res,next)=>{
    try {
        const hotels =await Hotel.findById(req.params.id);
        const list = await Promise.all(hotels.rooms.map(room=>{
            return Room.findById(room);
        }))
        res.status(200).json(list);
    } catch (error) {
        
    }
}