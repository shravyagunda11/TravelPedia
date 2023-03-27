//importing the values 
import React from 'react'
import "./SearchItems.scss"
import paris from "../../pics/img1.jpeg"
import pars from '../../pics/img2.jpeg'
import pa from '../../pics/img3.jpeg'
import { Link } from 'react-router-dom'

//rendering the Search items list 
export const SearchItems = ({item}) => {
    const img=[paris,pars,pa]
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
  return (
    <div className='searchItems'>
        <img
        src={img[getRandomInt(3)]}
        alt=''
        className='SearchItemImg'
        ></img>
        <div className='SearchItemDesc'>
            <h1 className='siTitle'>{item.name}</h1>
            <span className='siDistance'> {item.distance} from center of the city</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with AC
            </span>
            <span className='siFeatures'>
                {item.description}
            </span>
            <span className='siCancelOp'>
                Free Cancellation
            </span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price today
            </span>
        </div>
        <div className='SearchItemDetails'>
           {item.rating && <div className='siRating'>
            <span>Excellet</span>
            <button>{item.rating}</button>
           </div>}
           <div className='siDetailsTxt'>
            <span className='siRate'>${item.cheapestPrice}</span>
            <span className='siTax'>Includes taxes and fees</span>
            <Link to = {`/hotels/${item._id}`} >
                <span className='siCheckbtn'>See availability</span>
            </Link>
           
           </div>
        </div>
    </div>
  )
}
