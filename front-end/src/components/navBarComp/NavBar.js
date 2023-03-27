//importing the files 
import React from 'react'
import "./NavBar.scss"
import { useContext, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import {Link,Navigate} from 'react-router-dom'

export const NavBar = () => {
  //creating the conetxte
  const {user,dispatch} = useContext(AuthContext);


  const handleLogout = (e)=>{
    e.preventDefault();
    dispatch({type:"LOGOUT"})
  }
  //Dynamically rendering the values 
  return (
    <div className='navBar'>
      <div className='navBarContainer'>
        <Link to="/" className='linkingwebpage'>
          <span className='logo'>TravelPedia</span>
        </Link>
        {user ? 
        (
          <>
            <span>{user.userName}
            <button className='navBtnLogin' onClick={handleLogout}> LogOut</button>
            </span>
            
          </>
          
        
         ): (
          <div className='navBtns'>
          <Link to="/login">
            <button className='navBtnLogin' >Login</button> 
          </Link>
          <Link to="/register">
            <button className='navBtnReg'>Register</button>
          </Link>
          
        </div>
        )}
        
        
      </div>
    </div>
  )
}
