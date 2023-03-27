import mongoose  from "mongoose";

const { Schema } = mongoose;
//stafschema modles 
const staffSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:true
    },
    photo:{
        type:String
    },
    city:{
        type:String,
    },
    country:{
        type:String,
    },
    phone:{
        type:String
    }


},

{timestamps:true});

export default  mongoose.model("Staff", staffSchema);