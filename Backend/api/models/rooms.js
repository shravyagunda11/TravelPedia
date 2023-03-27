import mongoose  from "mongoose";

const { Schema } = mongoose;
//rooms schema modle 
const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    maxpeople:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    roomnumbers:[{ number : Number, unavailableDates:{ type : [Date] } }]

},

{timestamps:true});

export default  mongoose.model("Rooms", roomSchema);