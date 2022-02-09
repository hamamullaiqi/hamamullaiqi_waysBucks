import React from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRouteAdmin = ({element: Component, ...rest }) => {



    const adminLogin = false

    
    

    
    
  return (
       adminLogin ? <Outlet /> : <Navigate to="/income-transaction" />
    );
};

export default PrivateRouteAdmin;
