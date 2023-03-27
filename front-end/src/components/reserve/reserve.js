//imporitng the values 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch'
import './reserve.scss'
import { useContext, useState } from 'react';
import {SearchContext} from '../../context/searchContext'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

//Resrve the values 
const Reserve = ({setOpen,hotelId}) =>{

    const [selectedRooms, setSelectedRooms]=useState([]);
    // reteriving the vlaues from 
    const {data,loading,error} = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`);

    const {dates} = useContext(SearchContext);

    const getDatesIRange= (startDate,endDate)=>{

        const start=new Date(startDate);
        const end =new Date(endDate);
        const date=new Date( start.getTime());
        let list=[];
        while(date<=end)
        {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate()+1);
        }
        return list;
    }
    //reservethe days 
    const getAllDaysReserved= (getDatesIRange(dates[0].startDate,dates[0].endDate));
    //cgecking for the vaialbale dates 
    const isAvailable =(roomNumber)=>{

        const isFound = roomNumber.unavailableDates.some(date=>getAllDaysReserved.includes(new Date(date).getTime()))
        return !isFound;
    } 

    const handelSelect = (e)=>{
        const checked =e.target.checked;
        const value=e.target.value;
        // cehcing the rooms availablility
        setSelectedRooms(
            checked ?
            [...selectedRooms,value]
            : selectedRooms.filter((item)=>item  !== value)
        );
    };

    const nabigation = useNavigate();

    const handleRoomReserve = async ()=>{
        try {
            await Promise.all(selectedRooms.map((roomId)=>{
                const res = axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`,{dates : getAllDaysReserved});
                return res.data;
            }))
            setOpen(false);
            nabigation("/");
        } catch (error) {
            
        }
    }

    return(
        <div className='reserve'>
            <div className='rContainer'>
                <FontAwesomeIcon
                    icon = {faCircleXmark}
                    className="rClose"
                    onClick={()=>setOpen(false)} />

                <span>Select your rooms : </span>
                {
                    data.map(item=>(
                        <div className='rItem'>
                            <div className='rItemInfo'>
                                <div className='rTitle'> {item.title}</div>
                                <div className='rDesc'> {item.description} </div>
                                <div className='rMax'><b>Max People :</b>{item.maxpeople} </div>
                                <div className='rPrice'><b>Price : </b>{item.price} </div>
                            </div>
                            <div className='rSelectRoom'>
                           {item.roomnumbers.map((roomNumber)=>(
                                <div className='room'>
                                    <label>{roomNumber.number}</label>
                                    <input type="checkbox" className='inputimage' value={roomNumber._id} onChange={handelSelect} disabled={!isAvailable(roomNumber)}></input>
                                </div>
                           
                           ))}
                           </div>
                        </div>
                    ))}
                    <button onClick={handleRoomReserve} className='rButton' >Reserve Now!!</button>
            </div>
        </div>

    )
}

export default Reserve;