//list of qatar airways emirates

import React from 'react'
import "./FeaturedOperator.scss"
import turkey from "../../pics/turkey.jpeg"

//Rendering the Featire Opertaions 
export const FeaturedOperatir = () => {
  return (
    <div className='featureProp'>
        <div className='featurePropItem'>
            <img className = "featurePropImg" src={turkey}></img>
            <span className='featurePropName'>Qatar Airways</span>
            <span className='featurePropCity'>Qatar</span>
            <span className='featurePropPrice'>Starting from $120</span>
            <div className='featurePropRating'>
                <button>9.1</button>
                <span>Excellent</span>

            </div>
        </div> 
        <div className='featurePropItem'>
            <img className = "featurePropImg" src={turkey}></img>
            <span className='featurePropName'>Emirates</span>
            <span className='featurePropCity'>Emirates</span>
            <span className='featurePropPrice'>Starting from $120</span>
            <div className='featurePropRating'>
                <button>9.1</button>
                <span>Excellent</span>

            </div>
        </div> 
        <div className='featurePropItem'>
            <img className = "featurePropImg" src={turkey}></img>
            <span className='featurePropName'>Turkish Airlines</span>
            <span className='featurePropCity'>Turkey</span>
            <span className='featurePropPrice'>Starting from $120</span>
            <div className='featurePropRating'>
                <button>9.1</button>
                <span>Excellent</span>

            </div>
        </div> 
    </div>
  )
}
