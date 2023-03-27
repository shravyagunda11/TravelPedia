//called when clicked on search button

import React, { useState ,useEffect} from 'react'
import { NavBar } from '../../components/navBarComp/NavBar.js'
import { Header } from '../../components/headerListComp/Header.js'
import "./HotelList.scss"
import {useLocation} from "react-router-dom"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchItems } from '../../components/searchItems/SearchItems.js'
import useFetch from '../../hooks/useFetch'

import axios from 'axios'


export const HotelList = () => {
  const location = useLocation();
  //creating states for options
  const [destination,setDestination] = useState(location.state.destination)
  const [dates,setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options)
  const [datas, setDatas] = useState({})
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${destination}&units=imperial&appid=7397dbc4c1eeb3e7d8fcac8658b1bbfd`
  const [min,setMin] = useState(undefined)
  const [max,setMax] = useState(undefined)

  //fetchig the values from the rest apis
  const {data,loading,error} = useFetch(`http://localhost:8800/api/hotels?city=${destination}&min=${min||0}&max=${max||999}`)

  const searchLocation = ()=>{
    axios.get(url).then((response)=>
    {
      setDatas(response.data)
     
    })
  }
  useEffect(() =>{
    searchLocation();
  },[])
  //renderiing the html contents 
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
                <label>Destination</label>
                <input placeholder={destination} type="text" onChange={event=>setDestination(event.target.value)}></input>
            </div>
            <div className='listSearchItem'>
                <label>Check-in Date</label>
                <span onClick ={()=>setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyy")} to ${format(
                  dates[0].endDate, "MM/dd/yyy"
                )}`}</span>
               {openDate && <DateRange onChange={(item) => setDates([item.selection])}
               minDate={new Date()}
               ranges={dates}
               >
              </DateRange>}
            </div>
            <div className='listSearchItem'>
                <label>Options</label>
                <div className='listSearchOptions'>
                  <div className='listSearchOptionItem'>
                      <span className='lsOptionText' >Min Price <small>per night</small>
                      </span>
                      <input className='lsOptionInput' onChange={e=>setMin(e.target.value)}></input>
                  </div> 
                  <div className='listSearchOptionItem'>
                      <span className='lsOptionText'>Max Price <small>per night</small>
                      </span>
                      <input className='lsOptionInput' onChange={e=>setMax(e.target.value)}></input>
                  </div> 
                  <div className='listSearchOptionItem'>
                      <span className='lsOptionText'>Adult
                      </span>
                      <input type="number"  min={1} className='lsOptionInput' placeholder={options.adult}></input>
                  </div> 
                  <div className='listSearchOptionItem'>
                      <span className='lsOptionText'>Children 
                      </span>
                      <input type="number"  min={0} className='lsOptionInput' placeholder={options.children}></input>
                  </div> 
                  <div className='listSearchOptionItem'>
                      <span className='lsOptionText'>Room 
                      </span>
                      <input type="number" min={1} className='lsOptionInput' placeholder={options.room}></input>
                  </div> 
                </div>
            </div>
            <button>Search</button>
          </div>
          
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
          <div className='listResult'>
              { loading ? "Loading Please Wait ....!!!":(
                <>{data.map(item=>(
                  <SearchItems item={item} key={item._id}/>
                ))}
                </>
              )}
         </div>

        </div>

      </div>
    </div>
  )
}
