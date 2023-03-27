//importing the files
import React from 'react'
import "./FlightLevel.scss"
import paris from "../../pics/paris.jpg"
//Rendering the FlightLevels 
export const FlightLevel = () => {
  return (
    <div className="proList">
         <div className='proListItems'>
            <img className='imgpro'
            src={paris} alt='hello'></img>
            <div className='proTitles'>
                <h1>Economy</h1>
                
            </div>
        </div>
        <div className='proListItems'>
            <img className='imgpro'
            src={paris} alt='hello'></img>
            <div className='proTitles'>
                <h1>Economy Plus</h1>
                
            </div>
        </div>
        <div className='proListItems'>
            <img className='imgpro'
            src={paris} alt='hello'></img>
            <div className='proTitles'>
                <h1>Business</h1>
                
            </div>
        </div>
        <div className='proListItems'>
            <img className='imgpro'
            src={paris} alt='hello'></img>
            <div className='proTitles'>
                <h1>First Class</h1>
                
            </div>
        </div>
      
    </div>
  )
}
