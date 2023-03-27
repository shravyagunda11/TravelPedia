import mongoose  from "mongoose";

const { Schema } = mongoose;

//flight schema models 
const flightSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    origin:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    numberofStops:{
        type:Number,
        required:true
    },
    stops:{
        type:[String]
    },
    timeStamps:{
        type:[String]
    },
    timeDuration:{
        type:String,
        required:true,
    },
    photo:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    seats:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    passengers:{
        type:[String]
    },
    featured:{
        type:Boolean,
        default:false
    }

});

export default  mongoose.model("Flights",flightSchema);