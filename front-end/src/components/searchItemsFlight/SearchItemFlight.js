import React,{ useState} from 'react'
//importing the values 
import "./SearchItemFlight.scss"
import qatar from "../../pics/qatar-logo.jpg"
import emirated from "../../pics/Emirates-Logo.jpeg"
import {useLocation} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const SearchItemFlight = ({item}) => {
  
    const location = useLocation();
    //creating states for options
    const [destination,setDestination] = useState(location.state.destination)
    const [options,setOptions] = useState(location.state.options)
    const [from,setFrom] =useState(location.state.from)
    const [openDetails, setDetails] = useState(false)  
    //navigations 
    const navigate = useNavigate();
    //handeling the navigations 
    const handleSearch = ()=>{
      navigate(`/flightbooking/${item._id}`, {state : {destination, from, options}})
    }
    const img=[qatar,emirated]
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    //rendering the html contents 
    return (
    <div className='mainContainer'>
    <div className='searchItemss' onClick={()=>setDetails(!openDetails)}>
        <img
        src={img[getRandomInt(2)]}
        alt=''
        className='SearchItemImg'
        ></img>
        <div className='SearchItemDesc'>
            <h1 className='siTitle'>{item.name}</h1>
            <div className='siduration'>
                {item.timeDuration} hrs
            </div>
            <div className='siplaces'>
            <span>{item.from}</span>
            <span> ------------  </span>
            <span>{item.to}</span>
            </div>
           
            <div>
                
            <div className='sistops'>
                {item.numberofStops} stops
            </div>
            <span className='sitime1'>{item.timeStamps[0]}</span>
            <span className='sitime2'>{item.timeStamps[3]}</span>
            </div>
           
            <span className='siCancelOp'>
                Free Cancellation
            </span>
            <span className='siCancelOpSubtitle'>
                {item.description}
            </span>
        </div>
        <div className='SearchItemDetails'>
           <div></div>
           <div className='siDetailsTxt'>
            <span className='siRate'>${item.cheapestPrice}</span>
            <span className='siTax'>Includes taxes and fees</span>
            
                <button onClick={handleSearch} className='siCheckbtn'>Book</button>
           
           </div>
        </div>
        
    </div>
    <div>
        {openDetails && <div className='onclickVisible'>
            <div className='ocvTime'>
                <div>12h 10m</div>
                <div className='ocvTimeCnt'>2h</div>
                <div>3h 35m</div>
            </div>
            
            <div className='vl'></div>
            <div>
            <div className='ocv1'> 
            <span className='ocv1Element'>{item.timeStamps[0]}</span>
            <span>{item.from}</span>
            </div>
            <div className='ocv1'> 
            <span className='ocv1Element' >{item.timeStamps[1]}</span>
            <span>{item.stops[0]}</span>
            </div>
            <span className='ocvTimeCnt'>Connect in airport</span>
            
            <div className='ocv1'> 
            <span className='ocv1Element'>{item.timeStamps[2]}</span>
            <span>{item.stops[0]}</span>
            </div>
            <div className='ocv1'> 
            <span className='ocv1Element'>{item.timeStamps[3]}</span>
            <span>{item.to}</span>
            </div>
            </div>
            
        </div>}
    </div>
  
    </div>
  )
}
