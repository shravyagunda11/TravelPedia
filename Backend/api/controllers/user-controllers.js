import User from './../models/user.js';

//Upadting the contents using only ID
export const updateUser = async (req,res,next) =>{

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true});
        res.status(200).json(updatedUser);

    } catch (error) {
        next(error);
    }
    
}

//Deleting the contents using the ID
export const deleteUser = async (req,res,next) =>{

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted Successfully");

    } catch (error) {
        next(error);
    }
    
}

//Getting the value using the respective ID
export const getUser = async (req,res,next) =>{

    try {
        const selectedUser=await User.findById(req.params.id);
        res.status(200).json(selectedUser);

    } catch (error) {
        next(error)
    }
    
}

//Getting all the conetents present in that DB
export const getAllUsers = async (req,res,next) =>{

    try {
        const UsersList=await User.find();
        res.status(200).json(UsersList);

    } catch (error) {
        next(error)
    }
    
}