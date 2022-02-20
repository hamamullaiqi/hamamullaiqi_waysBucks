import React, { useContext, useEffect } from 'react';
import Header from './components/Navbar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import Landing from './components/Pages/Landing';
import DetailProduct from './components/Pages/DetailProduct';
import CartPage from './components/Pages/CartPage';
import AddProduct from './components/Pages/AddProduct';
import AddToping from './components/Pages/AddToping';
import IncomeTransaction from './components/Pages/IncomeTransaction';
import UserProfile from './components/Pages/UserProfile';
import { BrowserRouter as Router,Navigate,Route, Routes, useNavigate } from "react-router-dom";
import PrivateRouteAdmin from './components/Route/PrivateRouteAdmin';
import PrivateRouteUser from './components/Route/PrivateRouteUser';
import NotFound from './components/Pages/NotFound'
import { UserContext } from './context/userContext';




//api

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  

  const [state, dispatch] = useContext(UserContext);

  

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      <Navigate to ="/" />
    } else {
      if (state.user.status == "admin") {
        <Navigate to ="/" />

      } else if (state.user.status == "customer") {
        <Navigate to ="/" />
      }
    }
  }, []);
  

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
  
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
  
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;
  
      // Send data to useContext
          if(response.data.data.user.status == "admin") {
              dispatch({
                  type: "ADMIN_SUCCESS",
                  payload,
                  });
                
          }  
          if(response.data.data.user.status == "customer") {
              dispatch({
                  type: "USER_SUCCESS",
                  payload,
                });
          }
    
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);

  return (
      <Router>
        <div>
          <Header/>

        </div>
        <Routes>
            {/* Public Route */}
          <Route exact path='/' element={<Landing />} />
          
          

          {/* User Route */}
          <Route exact path='/' element={<PrivateRouteUser />} >
            <Route exact path='/user-profile' element={<UserProfile />} />
            <Route exact path='/card-page' element={<CartPage />} />
            <Route exact path='/detail-product/:id' element={<DetailProduct />} />
            <Route exact path='/*' element={<NotFound />} /> 
          </Route>


          {/* Admin Route */}
          <Route exact path='/' element={<PrivateRouteAdmin />} >
            <Route exact path='/add-product' element={<AddProduct />} />
            <Route exact path='/add-toping' element={<AddToping />} />
            <Route exact path='/income-transaction' element={<IncomeTransaction />} />
            <Route exact path='/*' element={<NotFound />} /> 
          </Route>
          
          <Route exact path='*' element={<NotFound />} /> 

        </Routes>
      </Router>


      
      
      
  );
}

export default App;
