//this if header for flight
import "./HeaderFlight.scss"

import React, { useState,useContext } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar, faHotel, faPerson} from "@fortawesome/free-solid-svg-icons"
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import { Link, useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { AuthContext } from '../../context/AuthContext';



export const HeaderFlight = ({type}) => {
    const [from,setFrom]=useState("")
    const [destination, setDestination] = useState("")
    const {user} = useContext(AuthContext);
    const [openDate, setOpenDate] = useState(false) //to not see the date

    const [date, setDate] = useState (new Date()
    
      ); 
      const [endDate, setEndDate]=useState();

    
     //for selecting number of people
     const [openOpt,setOpenOptions] = useState(false)
     const[options,setOptions] =useState ({
        adult:1,
        
}); 
    //navihation 
    const navigate = useNavigate();
    const handleOption = (name, operation) => {
        setOptions((prev)=>{
            return {
            ...prev ,
            [name]: operation === "i" ? options[name] + 1 : options[name] -1,
        };
    });
};
    const handleSearch = ()=>{
        navigate("/flightlist", {state : {from,destination, date,endDate ,options}})
    }
    
    const flight = ()=>{
       navigate("/flights",{})
    }
    //radio buttons 
    const [radioBtn,setRadioBtn]=useState("round");
    //Rendering the html files 
  return (
    <div className='header'>
        <div className={type === "list" ? "contianer list" : "contianer"}>  
            <div className='headerList'>
                <div className='headerListItems'>
                <FontAwesomeIcon icon={faHotel} />
                <Link to="/">
                    <span className='tabvalues'>Hotels</span>
                </Link>
                </div>
                <div className='headerListItems'>
                <FontAwesomeIcon icon={faPlane} />
                <Link to="/flights">
                    <span className='tabvalues'>Flights</span>
                </Link>
                </div>
            </div>
            
            { type !== "list" &&
                <>
            <h1 className='headerTitle'> A lifetime of discounts? It's Genius</h1>
            <p className='headerDescription'>
                Get rewarded for your travels - unlock instant svaings of 10% or 
                more with a free TravelPedia accout
            </p>
            {!user && <button className='headerBtn'>Sign in / Register</button>}
            <form onSubmit={handleSearch}>
            <div className='headerSearch'>
                <div className='headerSearchItem radiobtn'>
                    <div className="radiobtn1">
                        <input type="radio" value="One-Way" onChange={()=>setRadioBtn("one")} name="rb" required></input>
                        <label className="one-way">One-Way &nbsp; &nbsp;</label>
                    </div >
                    <div className="radiobtn1">
                        <input type="radio" value="Round-Trip" onChange={()=>setRadioBtn("round")} name="rb" required></input>
                        <label className="round-way">Round-Trip</label>
                    </div>
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faHotel} className="headIcon searchbar"/>
                <input 
                    type="text" 
                    placeholder="From" 
                    className="headerSearchIp"
                    onChange={(e) => setFrom(e.target.value)}
                    required
                    ></input>  
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faHotel} className="headIcon searchbar"/>
                <input 
                    type="text" 
                    placeholder="To" 
                    className="headerSearchIp"
                    onChange={(e) => setDestination(e.target.value)}
                    required
                    ></input>  
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faCalendar} className="headIcon date"/>

                    <input required className="startdate" type="date"onChange={e=>setDate(e.target.value)} ></input> 
                
                </div>
                <span className="to">to</span>
                    <div className='headerSearchItem'>
                        <input  required className="enddate" type="date" onChange={e=>setEndDate(e.target.value)} min={date}
                            disabled={radioBtn==="one"?true:false}></input>
                    </div>
                <div className='headerSearchItem'>

                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className="headIcon person"/>
                <span onClick={()=>setOpenOptions(!openOpt)} className='headerSearchPerson'>
                {`${options.adult} passenger`}
                </span>  
                  { openOpt && <div className='options'>
                        <div className='optionItems'>
                            <span className='optionAdult'>Passengers</span>
                            <div className='optionCtr'>
                                <button 
                                disabled={options.adult <=1}
                                className='optionCtrBtn' 
                                onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className='optionCtrNum'>{options.adult}</span>
                                <button className='optionCtrBtn' onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        
                    </div>
                    }
                </div>
                <div className='headerSearchItem'>
                    <button type="submit" className='headerBtn' >Search</button> 
                </div>
            </div>
            </form>
            </>}
        </div>
    </div>
  );
}
