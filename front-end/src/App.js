//importing the files
import logo from './logo.svg';
import './App.scss';
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import { Home } from './pages/homePage/Home';
import { HotelList } from './pages/hotelListPage/HotelList';
import { Hotel } from './pages/hotel/Hotel';
import Login from './pages/login/login'
import Register from './pages/register/register';
import { FlightHomePage } from "./pages/flightHomePage/FlightHomePage"
import { FlightListPage } from './pages/flightListPage/FlightListPage'
import { FlightBooking } from './pages/flightBooking/FlightBooking'
import { PaymentPage } from './pages/paymentPage/PaymentPage'

function App() {
  //routing the files to thr resepctive strutures
  return (
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/hotels" element={<HotelList/> }/>
          <Route path="/hotels/:id" element={<Hotel/> }/>
          <Route path="/login" element={<Login/> }/>
          <Route path="/register" element={<Register/> }/>
          <Route path="/flights" element={<FlightHomePage/> }/>
          <Route path="/flightlist" element={<FlightListPage/> }/>
          <Route path="/flightbooking/:id" element={<FlightBooking/> }/>
          <Route path='/payment' element={<PaymentPage/>}></Route>

        </Routes>
   </BrowserRouter>
  );
}

export default App;
