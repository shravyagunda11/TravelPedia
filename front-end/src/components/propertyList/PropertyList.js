//list of property types

import "./PropertyList.scss"

import React from 'react'

import useFetch from '../../hooks/useFetch'
import paris from "../../pics/img1.jpeg"
import pars from '../../pics/img2.jpeg'
import pa from '../../pics/img3.jpeg'

export const PopertyList = () => {
  //Usefetch the vaues of count
  const {data,loading,error} = useFetch("http://localhost:8800/api/hotels/countBy/Type")

  const images=[paris,pa,paris,paris,pa];
//HTML rendering the values 
  return (
    <div className="proList">
        {   
        loading?("Loading Please Wait....!!"):
        (<>
        {images && data.map((im,i)=>(
            <div className='proListItems'>
                <img className='imgpro' src={images[i]} alt='hello'></img>
                <div className='proTitles'>
                    <h1 className="headings">{im?.type}</h1>
                    <h2 className="headings">{im?.count}</h2>
                </div>
            </div>

        ))}
        </>)
    }
    </div>

  )
}
