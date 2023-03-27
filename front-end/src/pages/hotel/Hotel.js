//represnts each hotel

import React, {useState,useContext} from 'react'
import "./hotel.scss"
import { NavBar } from '../../components/navBarComp/NavBar.js'
import {Header} from "../../components/headerListComp/Header.js"
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useLocation,useNavigate } from 'react-router-dom'
import {SearchContext} from '../../context/searchContext'
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/reserve'

//Hotel page rendering 
export const Hotel = () => {
  
  const location = useLocation();
  //loactions 
  const id=(location.pathname.split("/")[2]);
  console.log(id);

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = useState(false)
  //fetching data from the api
  const {data,loading,error} = useFetch(`http://localhost:8800/api/hotels/${id}`);
  
  const {dates,options} = useContext(SearchContext);

  const {user} = useContext(AuthContext);
  const navigator= useNavigate();

  // calcluating the date difference 
  function dateDifference(date1,date2)
  {
    const timeDiff = Math.abs(date2.getTime()- date1.getTime());
    const diffDays= Math.ceil((timeDiff)/(1000*60*60*24));
    return diffDays;
  }
  // constant differnec in date 
  const diffdates = (dateDifference(dates[0].endDate,dates[0].startDate))

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleBookingPage = ()=>{
    if(user)
    {
        setOpenModel(true);
    }else
    {
      navigator('/login')
    }
  }

  const handleMove = (direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber =slideNumber === 0 ? 5 : slideNumber -1
    }
    else{
      newSlideNumber =slideNumber === 5 ? 0 : slideNumber +1
    }

    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <NavBar></NavBar>
      <Header type="list"></Header>
      {
        loading ? "Loading Please Wait":
        (
        <div className='hotelContainer'>
        { open && (
          <div className='slider'>
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowl" onClick={()=>handleMove("l")}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faCircleArrowRight} className = "arrowr" onClick={()=>handleMove("r")}></FontAwesomeIcon>
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} 
              className='sliderimg'></img>
            </div>
            
        </div>)}
        <div className='hotelWrapper'>
              <h1 className='hotelName'>{data.name}</h1>
              <div className='hotelAddress'>
              <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
              <span>{data.address}</span>
              </div>
              <span className='hotelDist'>
                Excellent location - {data.distance}m from time square
              </span>
              <span className='hotelPrice'>
                Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
              </span>
              <div className='hotelImages'>
                  {photos.map((photo,i)=>(
                    <div className='hotelImgWrap'>
                      <img onClick={()=>handleOpen(i)}
                      src={photo.src} className="img"></img>
                    </div>
                  ))}
              </div>
              <div className='hotelDet'>
                <div className='hotelDetText'>
                  <h1 className='title'>{data.title}</h1>
                  <p className='desc'>
                    {data.description}</p>
                  </div>
                <div className='hotelDetPrice'>
                    <h1>Perfect for a {diffdates}-night stay!</h1>
                    <span>
                      Located in the real heart of NYC, this property has an
                      excellent location score of 9.8!
                    </span>
                    <h2>
                      <b>${diffdates*data.cheapestPrice*options.room}</b> ({diffdates} nights)
                    </h2>
                    <button onClick={handleBookingPage}>Book Now!</button>
                </div>
              </div>
          </div>
          <MailList></MailList>
          <Footer></Footer>
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} hotelId={id}></Reserve>}
      </div>
    
  )
}
