//has list of flights of the dates

import React from 'react'
import { useState,useEffect } from 'react'

import { NavBar } from '../../components/navBarComp/NavBar'
import { Header } from '../../components/headerListComp/Header.js'
import "./FlightListPage.scss"
import {useLocation} from "react-router-dom"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'

import { SearchItemFlight } from '../../components/searchItemsFlight/SearchItemFlight'
import useFetch from '../../hooks/useFetch'

import axios from 'axios'

export const FlightListPage = () => {

  const location = useLocation();
  //creating states for options
  const [destination,setDestination] = useState(location.state.destination)
  //creating states for options
  const [from,setFrom] =useState(location.state.from)
  const [date,setDate] = useState(location.state.date)
  //creating states for options
  const [endDate,setEndDate]=useState(location.state.endDate);
  const [openDate, setOpenDate] = useState(false);
  //creating states for options
  const [options,setOptions] = useState(location.state.options)
  const [min,setMin] = useState(undefined)
  const [max,setMax] = useState(undefined)

  const [datas, setDatas] = useState({})
  //connecting the values to the weather api
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${destination}&units=imperial&appid=7397dbc4c1eeb3e7d8fcac8658b1bbfd`
  // use fecth api to get data 
  const {data,loading,error} = useFetch(`http://localhost:8800/api/flights?from=${from}&to=${destination}&min=${min||0}&max=${max||99999}`);

  const searchLocation = ()=>{
    axios.get(url).then((response)=>
    {
      setDatas(response.data)
     
    })
  }
  useEffect(() =>{
    searchLocation();
  },[])

  // html rendering the value 
  return (
    <div>
        <NavBar></NavBar>
        <Header type ="list"></Header>
        <div className='listContainer'>
            <div className='listWrapper'>
              <div>
                <div className='listSearch'>
                  <h1 className='listTitle'>Search</h1>


                  <div className='listSearchItem'>
                      <label>From</label>
                      <input placeholder={from} type="text" onChange={e=>setFrom(e.target.value)}></input>
                  </div>

                  <div className='listSearchItem'>
                      <label>To</label>
                      <input placeholder={destination} type="text" onChange={e=>setDestination(e.target.value)}></input>
                  </div>

                  
                  <div className='listSearchItem'>
                      <label>From Date</label>
                      
                    <input type="date" value={date}></input>
                  </div>
                  {endDate ? <>
                    <div className='listSearchItem'>
                      <label>To Date</label>
                     
                    <input type="date" value={endDate}></input>
                  </div></> : <></>}


                <div className='listSearchItem'>
                    <label>Options</label>
                    <div className='listSearchOptions'>
                      <div className='listSearchOptionItem'>
                          <span className='lsOptionText'>Min Price
                          </span>
                          <input className='lsOptionInput' onChange={e=>setMin(e.target.value)}></input>
                      </div> 
                      <div className='listSearchOptionItem'>
                          <span className='lsOptionText'>Max Price 
                          </span>
                          <input className='lsOptionInput' onChange={e=>setMax(e.target.value)}></input>
                      </div> 
                      <div className='listSearchOptionItem'>
                          <span className='lsOptionText'>Passenger
                          </span>
                          <input type="number"  min={1} className='lsOptionInput' placeholder={options.adult}></input>
                      </div> 
                    </div>
                </div>
            <button>Search</button>
                </div>
                <div>
                <div className='weather_api'>
            <div className='weather_container'>
              <div className='top'>
                  <div className='location-temp'>
                  <h1 className="listTitle">Weather in {destination}</h1>
                  </div>
                  <div className='temperature'>
                    {datas.main?<h1>{datas.main.temp}°F</h1>:null }
                  </div>
                  <div className='description-temp'>
                    {datas.weather ? <p>{datas.weather[0].main}</p> : null}
                  </div>
                </div>
                <div className='bottom'>
                  <div className='humidity'>
                    {datas.main ? <p className='bold'>{datas.main.humidity}% humidity</p> : null}
                  </div>
                  <div className='winds'>
                  {datas.wind ? <p className='bold'>{datas.wind.speed.toFixed()} MPH winds</p> : null}
                  </div>
                </div>
              </div>
          </div>
          </div>
                </div>
                <div className='listResult'>
                    { loading ? "Loading Please Wait ....!!!":(
                    <>{data.map(item=>(
                      <SearchItemFlight item={item} key={item._id}/>
                    ))}
                    </>
                  )}
                </div>
            </div>

        </div>
    </div>
   
  )
}
