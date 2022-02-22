import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRouteAdmin = ({element: Component, ...rest }) => {


    
    const [state] = useContext(UserContext)
    
    
    console.log(state.isAdminLogin);
  return (
        state.isAdminLogin ? <Outlet/> : <Navigate to="/income-transaction"/>
    );
};

export default PrivateRouteAdmin;
