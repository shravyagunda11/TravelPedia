//importing the file 
import "./App.scss";
import Home from "./pages/home/home";

  import { AuthContext } from "./context/AuthContext";

import { useContext } from "react";
import { hotelColumns, roomColumns, userColumns,flightColumns } from "./data/dataresource";

import { userInputs } from "./Sources";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import List from "./pages/list/list";
import Login from "./pages/login/login";
import New from "./pages/newentry/newentry";
import Single from "./pages/single/single";

import NewHotel from "./pages/newHotel/newhotel";

import NewRoom from "./pages/newRoom/newroom";
//rendering the htm files 
function App() {

  const LogOut =({child})=>{
    const { dispatch } = useContext(AuthContext);
   dispatch({ type: "LOGOUT" });

   return child;
  };

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
// return the html page for router 
  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="staff">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
