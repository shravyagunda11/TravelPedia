import Seats from './../models/seats.js'
import Flights from '../models/flights.js';
//creating the seats 
export const createSeats = async (req,res,next)=>{

    const flightId= req.params.flightid;
    const newSeat = new Seats(req.body);

    try {
        const saveSeat = await newSeat.save();
        try {
            await Flights.findByIdAndUpdate(flightId,{$push:{seats:saveSeat._id}})
        } catch (error) {
            next(error);
        }
        res.status(200).json(saveSeat);
    } catch (error) {
        next(error);
    }

} 
//gettig the floght details 
export const getFlightSeats = async (req,res,next)=>{
    try {
        const flights =await Flights.findById(req.params.id);
        const list = await Promise.all(flights.seats.map(seat=>{
            return Seats.findById(seat);
        }))
        res.status(200).json(list);
    } catch (error) {
        
    }
}

//updating te flights details 
export const updateFlightSeats = async (req,res,next) =>{
    try {
        await Seats.updateOne({"seatnumbers._id":req.params.id},{$set :{
            "seatnumbers.$.reserved":req.body.reserved
            },
        }  
    );
    console.log("Hellossssss");
        res.status(200).json("Seat Status has been Updated");

    } catch (error) {
        next(error);
    }
}