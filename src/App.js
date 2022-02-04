import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import Landing from './components/Landing';
import DetailProduct from './components/DetailProduct';
import CartPage from './components/CartPage';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <DetailProduct /> 
      <CartPage />
      <AddProduct />
    </div>
  );
}

export default App;
