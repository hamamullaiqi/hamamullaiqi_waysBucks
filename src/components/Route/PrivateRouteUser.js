import React from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRouteUser = ({element: Component, ...rest }) => {


    const userLogin = false
    
  return (
        userLogin ? <Outlet/> : <Navigate to="/" />
    );
};

export default PrivateRouteUser;
