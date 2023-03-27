//has stay and flight button option

import React, { useState,useContext } from 'react'
import "./Header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar, faHotel, faPerson} from "@fortawesome/free-solid-svg-icons"
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/searchContext'
import { AuthContext } from '../../context/AuthContext';


export const Header = ({type}) => {

    const {user} = useContext(AuthContext);

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false) //to not see the date
    const [dates, setDates] = useState ([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]); 
     //for selecting number of people
     const [openOpt,setOpenOptions] = useState(false)
     const[options,setOptions] =useState ({
        adult:1,
        children:0,
        room:1,
}); 
    //navigation 
    const navigate = useNavigate();
    const handleOption = (name, operation) => {
        setOptions((prev)=>{
            return {
            ...prev ,
            [name]: operation === "i" ? options[name] + 1 : options[name] -1,
        };
    });
};
//dispatching the values 
const {dispatch} = useContext(SearchContext);

    const handleSearch = ()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        navigate("/hotels", {state : {destination, dates, options}})
    }
    //Rendering the header dsctions 
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
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faHotel} className="headIcon searchbar"/>
                <input 
                    type="text" 
                    placeholder="Where are you going" 
                    className="headerSearchIp"
                    onChange={(e) => setDestination(e.target.value)}
                    required
                    ></input>  
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendar} className="headIcon date"/>
                <span onClick={()=>setOpenDate(!openDate)}className='headerSearchDate'>
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                </span> 
               {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="datepicker"
                    minDate={new Date()}
                    />}
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className="headIcon person"/>
                <span onClick={()=>setOpenOptions(!openOpt)} className='headerSearchPerson'>
                {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>  
                  { openOpt && <div className='options'>
                        <div className='optionItems'>
                            <span className='optionAdult'>Adult</span>
                            <div className='optionCtr'>
                                <button 
                                disabled={options.adult <=1}
                                className='optionCtrBtn' 
                                onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className='optionCtrNum'>{options.adult}</span>
                                <button className='optionCtrBtn' onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className='optionItems'>
                            <span className='optionChild'>Children</span>
                            <div className='optionCtr'>
                                <button 
                                disabled={options.children <=0}
                                className='optionCtrBtn' onClick={()=>handleOption("children", "d")}>-</button>
                                <span className='optionCtrNum'>{options.children}</span>
                                <button className='optionCtrBtn' onClick={()=>handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className='optionItems'>
                            <span className='optionRoom'>Room</span>
                            <div className='optionCtr'>
                                <button 
                                disabled={options.room <=1}
                                className='optionCtrBtn' onClick={()=>handleOption("room", "d")}>-</button>
                                <span className='optionCtrNum'>{options.room}</span>
                                <button className='optionCtrBtn' onClick={()=>handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className='headerSearchItem'>
                    <button className='headerBtn' type="submit" >Search</button> 
                </div>
            </div>
            </form>
            </>}
        </div>
    </div>
  );
};
