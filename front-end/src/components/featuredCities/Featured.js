//list of cities

import React from 'react'
import "./Featured.scss"
import arizona from "../../pics/arizona.jpg"
import paris from "../../pics/paris.jpg"
import turkey from "../../pics/turkey.jpeg"
import useFetch from '../../hooks/useFetch'

//Exporting the files
export const Featured = () => {
    //fetching values
    const {data,loading,error} = useFetch("http://localhost:8800/api/hotels/countBy/City?cities=Bengaluru,Chennai,Mumbai")

    const values=[arizona,paris,turkey]

    //Rendering the HTml components dynamicvally
  return (
    <div className='featured'>
        {
            loading ?("Loading Please wait"):(
            <>
            <div className='featuredItems'>
            <img className='imgfeatured' src={values[0]} alt='hello'></img>
            <div className='featuredTitles'>
                <h1>Bengaluru</h1>
                <h2>{data[0]} Stays</h2>
            </div>
        </div>
        <div className='featuredItems'>
            <img  className='imgfeatured' src={values[1]} alt='hello'></img>
            <div className='featuredTitles'>
                <h1>Chennai</h1>
                <h2>{data[1]} Stays</h2>
            </div>
        </div>
        <div className='featuredItems'>
            <img  className='imgfeatured' src={values[2]} alt='hello'></img>
            <div className='featuredTitles'>
                <h1>Mumbai</h1>
                <h2>{data[2]} Stays</h2>
            </div>
        </div>
        </>
        )}
    </div>
  )
}
