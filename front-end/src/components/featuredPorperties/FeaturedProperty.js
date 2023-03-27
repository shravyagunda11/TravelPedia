//list of properties

import React from 'react'
import "./FeaturedProperty.scss"
import turkey from "../../pics/turkey.jpeg"
import useFetch from '../../hooks/useFetch'
import paris from "../../pics/img1.jpeg"
import pars from '../../pics/img2.jpeg'
import pa from '../../pics/img3.jpeg'
//Rendering the values for  Featured properties
export const FeaturedProperty = () => {
    //Fetching the values form the rest api 
    const {data,loading,error} = useFetch("http://localhost:8800/api/hotels?featured=true&limit=3")

    const images=[turkey,paris,pa]
    //Dynamically load data
  return (
    <div className='featureProp'>
        {loading?   "Loading please wait ": 
        <>
        {images && data.map((item,i) => (

            <div className='featurePropItem'>
                <img className = "featurePropImg" src={images[i]}></img>
                <span className='featurePropName'>{item.name}</span>
                <span className='featurePropCity'>{item.city}</span>
                <span className='featurePropPrice'>Starting from ${item.cheapestPrice}</span>
                {item.rating && <div className='featurePropRating'>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                </div>}
            </div> 
        ))}
        
        </>}
       
    </div>

  )
}
