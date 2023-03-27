import mongoose  from "mongoose";

const { Schema } = mongoose;
//userschema model
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},

{timestamps:true});

export default  mongoose.model("Users", userSchema);