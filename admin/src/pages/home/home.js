//imporitng the files 
import './home.scss'
import React from 'react'
import Sidebar from '../../components/sideBar/sideBar';
import NavBar from '../../components/navBar/navBar';
import Table from '../../components/table/table';

import Featured from '../../components/featured/featured'

import useFetch from "../../hooks/useFetch";

//Home html rendering the files 
const Home = ()=>{
    //use fetch the coun by type 
    const {data,loading} = useFetch("http://localhost:8800/api/hotels/countBy/Type")

    return (
        <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        
        <div className="charts">
        {   
        loading?("Loading Please Wait....!!"):
        (<>
        {data.map((im,i)=>(
          <>
            <Featured name={im?.type} count={im?.count}/>
          </>
        ))}
        </>)
    }

         
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
    )
}

export default Home;