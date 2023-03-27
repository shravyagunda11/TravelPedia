import Users from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { createErrors } from "../Utilities/errors.js";


import mail from 'nodemailer'
//Mail sender function
const transporter = mail.createTransport({
    service:'hotmail',
    auth:{
        user:"travelpedias@outlook.com",
        pass:"12345qwert@19"
    }
});

//register funciton
export const register = async (req,res , next)=>{
    try {

        const user= await Users.findOne({userName:req.body.username});
        if(user)
            return next(createErrors(409,"User Already Registered"));

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Users({

            userName:req.body.username,
            email:req.body.email,
            password:hash,

        })
        await newUser.save();

        const options = {
            from:"travelpedias@outlook.com",
            to: req.body.email ,
            subject:"Thank You for Registration",
            html:`
                    <p>Hello ${req.body.username}</p>
                    <p>We hope you and and your family are in good shape and wishing good health and enjoy travelling with TravelPedias</p>
                    <p>Thank You</p>`,
            // attachments: [{
            //     filename: 'logo-png.png',
            //     path: logo,
            //     cid: 'logo' 
            // }]
        
        }

        transporter.sendMail(options,function(err,info){
            if(err)
            {
                console.log(err);
                return ;
            }
           
                console.log("Sent response :",info.response);
        
        })


        res.status(200).send("Successfully Registered");




    } catch (error) {
        next(error);
    }
}
//login functions
export const login = async (req,res , next)=>{
    try {
        
        const user= await Users.findOne({userName:req.body.username});
        if(! user){
            return next(createErrors(404,"User Not Registered"));
        }

        const isPassword = await bcrypt.compare(req.body.password,user.password) ;
        if(! isPassword)
            return next(createErrors(400,"Wrong Password or UserName"));

        const token =jwt.sign({id:user._id,isAdmin:user.isAdmin}, process.env.SECRET );
        
        const {password,...others} = user._doc;

        res.cookie("access_token",token,{httpOnly:true}).status(200).json({...others});
    } catch (error) {
        next(error);
    }
}

//Mail subscribing the funciton
export const subscribeEmail = async (req,res,next)=>{
    const emailvalue = req.body.email;
    
    const opt = {
        from:"travelpedias@outlook.com",
        to: emailvalue,
        subject:"Thank You for Subscribing",
        html:`  <p>Hello User</p>
                <p>Thanks for Subscribing to TravelPedias </p>
                <p>For latest images please do visit our webpage <a href="http://localhost:3000/"> Click Here</a> </p>
                <p>Thank You</p>`,
    
    }

    transporter.sendMail(opt,function(err,info){
        if(err)
        {
            console.log(err);
            return ;
        }
       
            console.log("Sent response :",info.response);
    
    })
    
}