import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import Landing from './components/Landing';
import DetailProduct from './components/DetailProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <DetailProduct /> 
    </div>
  );
}

export default App;
