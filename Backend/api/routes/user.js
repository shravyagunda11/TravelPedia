import express from 'express';

import {updateUser,deleteUser,getUser,getAllUsers} from '../controllers/user-controllers.js'
import {verifyAdmin, verifyToken,verifyUser} from '../Utilities/verifyTokens.js'


const router = express.Router();
//routing to the respective creating seats
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello you are logged in !!!");
})
//routing to the respective creating seats
router.get("/checkuser/:id", verifyUser ,(req,res,next)=>{
    res.send("hello user you are logged in and you can delete your account  !!!");
})
//routing to the respective creating seats
router.get("/checkadmin/:id", verifyAdmin ,(req,res,next)=>{
    res.send("hello admin, you are logged in and you can update and delete all account  !!!");
})

//Upadting the contents using only ID
router.put('/:id',verifyUser ,updateUser );

//Deleting the contents using the ID
router.delete('/:id',verifyUser ,deleteUser );

//Getting the value using the respective ID
router.get('/:id',verifyUser ,getUser );

//Getting all the conetents present in that DB
router.get('/',verifyAdmin ,getAllUsers );

export default router;