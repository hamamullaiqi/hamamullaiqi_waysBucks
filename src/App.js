import React from 'react';
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
import { BrowserRouter as Router,Switch,Route,Link, Routes } from "react-router-dom";
import PrivateRouteAdmin from './components/Route/PrivateRouteAdmin';
import PrivateRouteUser from './components/Route/PrivateRouteUser';
import NotFound from './components/Pages/NotFound'



function App() {
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
            <Route exact path='/detail-product' element={<DetailProduct />} />
          </Route>


          {/* Admin Route */}
          <Route exact path='/' element={<PrivateRouteAdmin />} >
            <Route exact path='/add-product' element={<AddProduct />} />
            <Route exact path='/add-toping' element={<AddToping />} />
            <Route exact path='/income-transaction' element={<IncomeTransaction />} />
            <Route exact path='/*' element={<NotFound />} /> 
          </Route>
          {/* {/* <Route exact path='/login' element={<ModalLogin />} /> */}
          <Route exact path='*' element={<NotFound />} /> 

        </Routes>
      </Router>


      
      
      
  );
}

export default App;
