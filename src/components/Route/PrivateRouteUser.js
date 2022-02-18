import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

const PrivateRouteUser = ({element: Component, ...rest }) => {


    
    const [state] = useContext(UserContext)

    
    
  return (
        state.isLogin ? <Outlet/> : <Navigate to="/"/>
    );
};

export default PrivateRouteUser;
