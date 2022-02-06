import React from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRouteUser = ({element: Component, ...Rest }) => {
    const userLogin = false
    const navigate = useNavigate()
  return (
        userLogin ? <Outlet/> : <Navigate to="/" />
    );
};

export default PrivateRouteUser;
