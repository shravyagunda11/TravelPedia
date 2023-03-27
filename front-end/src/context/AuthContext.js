import { createContext, useEffect, useReducer } from "react"
//Initial States
const INITIAL_STATE = {
    user :JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null
};

export const AuthContext = createContext(INITIAL_STATE);
//Dispatch functions 
const AuthReducer = (state,action)=>{
    switch(action.type)
    {
        case "LOGIN_START" : return {
            user :null,
            loading:true,
            error:null
        };
        case "LOGIN_SUCCESS" : return {
            user :action.payload,
            loading:false,
            error:null
        };
        case "LOGIN_FAILURE" : return {
            user :null,
            loading:false,
            error:action.payload
        };
        case "LOGOUT" : return {
            user :null,
            loading:false,
            error: null
        };
       
        default :
            return state;
    }
}
//Context Providers 
export const AuthContextProvider= ({children})=>{
    const [state, dispatch ]= useReducer(AuthReducer, INITIAL_STATE);
    //using loscal storage for storageof the values 
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])
    // HTml rendering values 
    return (
        <AuthContext.Provider value={{
            user:state.user,
            loading:state.loading,
            error:state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}