import React from "react";
import "./list.scss";
//imporing the files 
import SideBar from "../../components/sideBar/sideBar";
import NavBar from "../../components/navBar/navBar";
import ListTable from '../../components/table/listTable';

//html rendering 
const List = ({columns}) => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <ListTable columns={columns}/>
      </div>
    </div>
  );
};

export default List;
