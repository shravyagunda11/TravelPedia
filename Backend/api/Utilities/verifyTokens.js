import jwt from "jsonwebtoken";
import {createErrors} from './errors.js';
//token verifications 
export const verifyToken=(req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token)
        return next(createErrors(401,"Your are not authenticated"));
    
    jwt.verify(token,process.env.SECRET,(error,user)=>{
        if(error)
            return next(createErrors(403,"Token is not valid "));

        req.user = user;
        next();
    })
}
//verifiy the uers for accessing the folders
export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            //if(error) return next(createErrors(403,"You are not authorized !!!"));  
            return next(createErrors(403,"You are not authorized !!!")); 
        }
    })
}
//verfiy if he an admin 
export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            //if(error) return next(createErrors(403,"You are not authorized !!!"));  
            return next(createErrors(403,"You are not authorized !!!")); 
        }
    })
}