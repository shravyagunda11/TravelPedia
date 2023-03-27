import Passengers from "../models/passengers.js";


//Inserting a new Post request 
export const createPassenger= async (req,res,next) =>{

    const newPassenger =await new Passengers(req.body);

    try {
        const savePassenger =await newPassenger.save();
        res.status(200).json(savePassenger);

    } catch (error) {
        next(error);
    }
}

//Getting all the conetents present in that DB
export const getAllPassenger = async (req,res,next) =>{

    try {
        const PassengersList=await Passengers.find();
        res.status(200).json(PassengersList);

    } catch (error) {
        next(error)
    }
    
}