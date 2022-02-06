import React from 'react';
import { Button,Stack } from 'react-bootstrap';

export const NavPublic = (props) => {
    console.log(props);
  return (

        <>
            <Stack direction="horizontal" gap={3} >
                <Button  onClick={props.handleModalLogin} className="px-5 outline-red " >Login</Button>
                
                <Button  onClick={props.handleModalRegister}  className="bg-red px-5">Register</Button>
            </Stack>
        </>
    )
};
