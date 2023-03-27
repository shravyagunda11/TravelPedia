//importing the values 
import React,{ useState } from 'react'
import "./FlightBooking.scss"

import { Header } from '../../components/headerListComp/Header'
import { NavBar } from '../../components/navBarComp/NavBar'
import { PassengerDetail } from '../../components/passengerDetails/PassengerDetail'
import {useLocation, useNavigate} from "react-router-dom"
import { FlightSeat } from '../../components/flightSeat/FlightSeat'

//html rendeing the floightBooking 
export const FlightBooking = () => {
    const location = useLocation();
    //fecthing the loaction of the url 
    const id=(location.pathname.split("/")[2]);

    const spr = []

    const [options,setOptions] = useState(location.state.options)
    const adul = options.adult;
  //navigating the value s
    const navigate = useNavigate();


    for (var i = 0; i < adul; i++) {
      spr.push(i);
    }
    //payments page redirecting 
    const payments = ()=>{
      navigate("/payment",{})
    }
    // dynamically rendering the values 
    return (
        <div>
          <NavBar></NavBar>
          <Header type="list"></Header>
    
          {
            spr.map((x, i ) => {
             return <PassengerDetail flightId={id}></PassengerDetail>;
            })
          }

          <FlightSeat flightId={id}></FlightSeat>


          <div className='btndiv'>
            <button  className='btnPayment' onClick={payments}>Pay</button>
          </div>
          
        </div>
  )
}
