import Flight from './../models/flights.js';

//Inserting a new Post request 
export const createFlight = async (req,res,next) =>{

    const newFlight =await new Flight(req.body);

    try {
        const saveFlight =await newFlight.save();
        res.status(200).json(saveFlight);

    } catch (error) {
        next(error);
    }
}

//Upadting the contents using only ID
export const updateFlight = async (req,res,next) =>{

    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
        res.status(200).json(updatedFlight);

    } catch (error) {
        next(error);
    }
    
}

//Deleting the contents using the ID
export const deleteFlight = async (req,res,next) =>{

    try {
        await Flight.findByIdAndDelete(req.params.id)
        res.status(200).json("Flight Deleted Successfully");

    } catch (error) {
        next(error);
    }
    
}

//Getting the value using the respective ID
export const getFlight = async (req,res,next) =>{

    try {
        const selectedFlight = await Flight.findById(req.params.id);
        res.status(200).json(selectedFlight);

    } catch (error) {
        next(error)
    }
    
}

//Getting all the conetents present in that DB
export const getAllFlight = async (req,res,next) =>{

    const {min, max, from, to,...others}=req.query
    
    try {
        //const flightList = await Flight.find({from:from,to:to})
        const flightList=await Flight.find(
            {...others,from:from,to:to,
                cheapestPrice:{$gt:min || 1, $lt : max || 999}
            }).limit(req.query.limit);
        
        res.status(200).json(flightList);

    } catch (error) {
        next(error);
    }
    
}

