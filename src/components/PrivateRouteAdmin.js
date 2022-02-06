import React from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRouteUser = ({element: Component, ...sest }) => {



    const adminLogin = true

    
    
  return (
       adminLogin ? <Outlet/> : <Navigate to="/" />
    );
};

export default PrivateRouteUser;
