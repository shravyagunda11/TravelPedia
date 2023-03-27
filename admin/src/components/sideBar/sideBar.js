import "./sideBar.scss";
//imporitn the values 
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


//html side bar rendering the values 
const Sidebar = () => {
  //dispathcing functions 
  const { dispatch } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">TravelPedias Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/staff" style={{ textDecoration: "none" }}>
            <li>
             
              <span>Staff</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              
              <span>Rooms</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            
            <span>Profile</span>
          </li>
          <li>
           
            <span onClick={()=>dispatch({ type: "LOGOUT" })}>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
