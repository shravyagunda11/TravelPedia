import Staff from './../models/staff.js'


//Insertion of a staff
export const createStaff = async (req,res,next) =>{

    const newStaff =await new Staff(req.body);

    try {
        const saveStaff =await newStaff.save();
        res.status(200).json(saveStaff);

    } catch (error) {
        next(error);
    }
}

//Reteriving staff details from the DB
export const getAllStaff = async (req,res,next) =>{

    try {
        const StaffList=await Staff.find();
        res.status(200).json(StaffList);

    } catch (error) {
        next(error)
    }
    
}

//Deleting the contents using the ID
export const deleteStaff = async (req,res,next) =>{

    try {
        await Staff.findByIdAndDelete(req.params.id)
        res.status(200).json("Staff Deleted Successfully");

    } catch (error) {
        next(error);
    }
    
}

//Getting the value using the respective ID
export const getStaff = async (req,res,next) =>{

    try {
        const selectedStaff=await Staff.findById(req.params.id);
        res.status(200).json(selectedStaff);

    } catch (error) {
        next(error)
    }
    
}
