//importing the files
import React from 'react'
import "./FeaturedCityFlight.scss"
import arizona from "../../pics/arizona.jpg"
import paris from "../../pics/paris.jpg"
import turkey from "../../pics/turkey.jpeg"

//Rending the features components 
export const FeaturedCityFlight = () => {
  return (
    <div className='featured'>
        <div className='featuredItems'>
            <img className='imgfeatured'
            src={arizona} alt='hello'></img>
            <div className='featuredTitles'>
                <h1>Arizona</h1>
                <h2>10 flights</h2>
            </div>
        </div>
        <div className='featuredItems'>
            <img  className='imgfeatured' src={paris} alt='hello'></img>
            <div className='featuredTitles'>
                <h1>Paris</h1>
                <h2>20 flights</h2>
            </div>
        </div>
        <div className='featuredItems'>
            <img  className='imgfeatured' src={turkey} alt='hello'></img>
            <div className='featuredTitles'>
                <h1>Turkey</h1>
                <h2>20 flights</h2>
            </div>
        </div>
    </div>
  )
}
