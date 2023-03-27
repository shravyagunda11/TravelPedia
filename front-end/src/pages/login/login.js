//imporitng the files
import axios from 'axios';
import { useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './login.scss';
//rendering the html contents 
const Login = ()=>{

    const [credentials,setCredentials] =useState({
        username:undefined,
        password:undefined
    })

    const {user, loading, error, dispatch} = useContext(AuthContext);
    //navigation 
    const navigate=useNavigate();

    const handleChanges = (e)=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleLogin =async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            //posting the credentials 
            const res= await axios.post("http://localhost:8800/api/auth/login",credentials);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            navigate("/");

        } catch (error) {
            dispatch({type:"LOGIN_FAILURE",payload:error.response.data})
        }
    }

    return (
        <div className='outer'>
        <div className='login'>
            <div className='loginContainer'>
                
                <input type="text" placeholder='UserName' id='username' onChange={handleChanges} className='loginInput'></input>
   
                <input type="password" placeholder='Password' id='password' onChange={handleChanges} className='loginInput2'></input>
               
                
                <button disabled={loading} onClick={handleLogin} className="loginButton">Login</button>
                {
                    error && <p><span className='errors'>{error.message}</span></p>
                }
                <>
                <p>
                    <Link to="/register">
                            <span className='refLink'> Create a new Account !</span>
                    </Link>

                </p>

                </>
                
            </div>
        </div>
        </div>
    )
} 

export default Login;