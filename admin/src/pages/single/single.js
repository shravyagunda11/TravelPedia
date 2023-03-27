import React from 'react'
import './single.scss'
//importing the files 
import SideBar from "../../components/sideBar/sideBar";
import NavBar from "../../components/navBar/navBar";

import { Link, useLocation } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
//html rendering part 
const Single = ()=>{

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // use fecth the values 
  const { data, loading, error } = useFetch(`http://localhost:8800/api/staff/${id}`);
  //html rendering part 
    return (
        <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.photo}
                alt="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 {data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. {data.city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    )
}

export default Single;