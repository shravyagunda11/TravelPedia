//creating the erros folders
export const createErrors = (status, message )=>{
    const err = new Error();
    err.status = status;
    err.message = message; 
    return err;
};