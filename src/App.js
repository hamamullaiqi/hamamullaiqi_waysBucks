import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import Landing from './components/Landing';
import DetailProduct from './components/DetailProduct';
import CartPage from './components/CartPage';
import AddProduct from './components/AddProduct';
import AddToping from './components/AddToping';
import IncomeTransaction from './components/IncomeTransaction';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router,Switch,Route,Link, Routes } from "react-router-dom";
import ModalLogin from './components/ModalLogin';
import ModalRegister from './components/ModalRegister';
import PrivateRouteUser from './components/PrivateRouteUser';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import NotFound from './components/NotFound';

function App() {
  return (
      <Router>
        <div>
          <Header/>

        </div>
        <Routes>

          <Route exact path='/' element={<Landing />} />

          
          <Route exact path='/' element={<PrivateRouteUser />} >

          
            <Route exact path='/detail-product' element={<DetailProduct />} />
            <Route exact path='/user-profile' element={<UserProfile />} />
            <Route exact path='/card-page' element={<CartPage />} />

          </Route>

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
