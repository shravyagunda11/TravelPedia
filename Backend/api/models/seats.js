import mongoose  from "mongoose";

const { Schema } = mongoose;
//seats schema modles 
const seatSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    seatnumbers:[{ number : Number, 
                    reserved:{  
                                type:Boolean,
                                default:false 
                            }
                }]

},

{timestamps:true});

export default  mongoose.model("Seats", seatSchema);