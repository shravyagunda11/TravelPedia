//importing the files
import React, {useState} from 'react'
import "./FlightSeat.scss"
import useFetch from '../../hooks/useFetch'
import seat from "../../pics/seat.jpeg"
import axios from 'axios';
import { faSortNumericDesc } from '@fortawesome/free-solid-svg-icons'


//Rending the Flight Seat pages 
export const FlightSeat = ({flightId}) => {
    const [id, setId] = useState("")
    //Fetaching the values from the flight id
    const {data,loading,error} = useFetch(`http://localhost:8800/api/seats/${flightId}`);

    const [selectedSeats, setSelectedSeats]=useState([]);
   
    const handelSelect = (e) => {
        const checked =e.target.checked;
        const value=e.target.value;

        setSelectedSeats(
            checked ?
            [...selectedSeats,value]
            : selectedSeats.filter((item)=>item  !== value)
        );

    }
    //on clikc hanfale reservations 
    const handlereservations = async  ()=>{
        try {
            //promise handling 
            await Promise.all(selectedSeats.map((seatId)=>{
                const res = axios.put(`http://localhost:8800/api/seats/availability/${seatId}`,{reserved : true});
                return res.data;
            }))
           
        } catch (error) {
            
        }
    }
   //Rendering  
  return (
    <>
    <div className='seatreservation'>
        <div className='people'>
        <p className='Title'>Select your Seats : </p>
        {
            data.map(item=>(
                <div className='rowwise'>
                    {item.seatnumbers.map((seatNumbers)=>(
                        <div className='columnwise'>
                            <input type="checkbox" value={seatNumbers._id} onChange={handelSelect} disabled={seatNumbers.reserved}></input>
                        </div>
                    ))}
                </div>
            ))
        }
        <button  onClick={handlereservations} > Reserve Seats </button>
        </div>
    </div>
    </>
  )
}






{/* <div className='seatsContainer'>
        <div className='seatRow'>
            <div className='seat'  >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r1c1' className='ipseat' onClick={e=>setId(e.target.id)}></input>
            </div>
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r1c2' className='ipseat' onClick={e=>setId(e.target.id)}></input>
            </div>
           
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r1c3' className='ipseat'></input>
            </div>
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r1c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow' >
            <div className='seat'  >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r2c1' className='ipseat'></input>
            </div>
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r2c2' className='ipseat'></input>
            </div>
           
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r2c3' className='ipseat'></input>
            </div>
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r2c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r3c1' className='ipseat'></input>
            </div>
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r3c2' className='ipseat'></input>
            </div>
           
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r3c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r3c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r4c1' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r4c2' className='ipseat'></input>
            </div>
           
            <div className='seat' >
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r4c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r4c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r5c1' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r5c2' className='ipseat'></input>
            </div>
           
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r5c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r5c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r6c1' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r6c2' className='ipseat'></input>
            </div>
           
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r6c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r6c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
        <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r7c1' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r7c2' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r7c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r7c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
        <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r8c1' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r8c2' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r8c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r8c4' className='ipseat'></input>
            </div>
        </div>
        <div className='seatRow'>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r9c1' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox" id='r9c2' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r9c3' className='ipseat'></input>
            </div>
            <div className='seat'>
                <img src={seat} className="ipimg"></img>
               <input type="checkbox"  id='r9c4' className='ipseat'></input>
            </div>
        </div>
    </div> */}
