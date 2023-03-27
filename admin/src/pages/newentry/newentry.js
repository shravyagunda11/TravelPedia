//imporiting the files 
import React from 'react'
import './newentry.scss';

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { useState } from 'react';

import axios from 'axios';

import Sidebar from '../../components/sideBar/sideBar';

import Navbar from '../../components/navBar/navBar';

//Newentry for staff detil 
const NewEntry = ({ inputs, title })=>{
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});

  
    const handleChange = (e) => {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const handleClick = async (e) => {
      e.preventDefault();
      const data = new FormData();
      
      data.append("file", file);

      data.append("upload_preset", "travelpedia");

      // adding all the conetnts into cloudinary
      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/des6rx1vw/upload",
          data
        );

        const { url } = uploadRes.data;
        
        const newUser = {
          ...info,
          photo: url,
        };
        
        //getting the vlues from rest api
        await axios.post("http://localhost:8800/api/staff", newUser);
      
      } catch (err) {
        console.log(err);
      }
    };
    //html rendering for the staff details 
    return (
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
  
                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      onChange={handleChange}
                      type={input.type}
                      placeholder={input.placeholder}
                      id={input.id}
                    />
                  </div>
                ))}
                <button onClick={handleClick}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewEntry;