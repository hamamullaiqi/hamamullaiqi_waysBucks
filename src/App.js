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

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <DetailProduct /> 
      <CartPage />
      <AddProduct />
      <AddToping/>
      <IncomeTransaction />
      <UserProfile />
    </div>
  );
}

export default App;
