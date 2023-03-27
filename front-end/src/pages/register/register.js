//imporitng the values 
import './register.scss'
import axios from 'axios';
import { useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

//rendering the register pages 
const Register = ()=>{

    const {user, loading, error, dispatch} = useContext(AuthContext);
    //contexts
    const [userState,setUserState]=useState(true);
    const [emailState,setEmailState]=useState(true);
    const [passwordState,setPasswordState]=useState(true);

    const [credentials,setCredentials] =useState({
        username:undefined,
        email:undefined,
        password:undefined,
        confirmPassword:undefined
    })
    //navigatio page
    const navigate=useNavigate();

    const handleChanges = (e)=>{
        if(e.target.id  === "username")
            setUserState(true);
        else if(e.target.id  === "email")
            setEmailState(true);
        else if(e.target.id === "confirmPassword")
            setPasswordState(true);

        //credentials 
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
        validationCheck();
    }
    // validation checks 
    const validationCheck = ()=>{

        let userregx=/^[A-Za-z]+$/;
        let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(credentials.username === undefined || !credentials.username.match(userregx))
        {
            setUserState(false)
        }
        
        if (credentials.email === undefined || !credentials.email.match(emailregex) )
        {
            setEmailState(false)
        }
            
        if( credentials.password === undefined || !(credentials.confirmPassword !== credentials.password))
        {
            setPasswordState(false)
        }
            

    }
    //register the pages
    const handleRegister = async (e) =>{
        e.preventDefault();
        validationCheck();
        if(userState && emailState && passwordState)
        {
            try {
                const value= await axios.post("http://localhost:8800/api/auth/register",credentials);
                navigate("/login");
            } 
            catch (error) {  
                     
            }
        }
    }
    //rendering the html pages 

    return (
        <div className='register'>
            <div className='registerContainer'>
                
                
                <input type="text" placeholder='UserName' id='username' onChange={handleChanges} className='registerInput' required></input>
                { !userState && <span className='errorchecking'>Invaild User Name</span>}

                <input type="email" placeholder='email' id='email' onChange={handleChanges} className='registerInput2' required></input>
                { !emailState && <spam className='errorchecking'>Invail Email</spam>}

                <input type="password" placeholder='Password' id='password' onChange={handleChanges} className='registerInput2'></input>
                { !passwordState && <span className='errorchecking'> Check Password </span>}

                <input type="password" placeholder='ConfirmPassword' id='confirmPassword' onChange={handleChanges} className='registerInput2'></input>
            
                { !passwordState && <span className='errorchecking'> Passwords not matching </span>}

                { (userState && emailState && passwordState) && <>
                <button disabled={loading} onClick={handleRegister} className='registerButton'>Register</button>
                {
                    error && <span className='errorchecking'>{error.message}</span>
                }</>
                }
                
            </div>
        </div>
    )
}

export default Register;