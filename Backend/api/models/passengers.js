import mongoose  from "mongoose";

const { Schema } = mongoose;
//passengers modles 
const passengerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
    },
    passport:{
        type:String,
        required:true,
    },
    passport:{
        type:String,
        required:true
    },
    flights:{
        type:[String]
    }
},

{timestamps:true});

export default  mongoose.model("Passengers", passengerSchema);