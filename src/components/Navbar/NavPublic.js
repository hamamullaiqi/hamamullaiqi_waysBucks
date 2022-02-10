import React, { useState } from 'react';
import { Button,Stack } from 'react-bootstrap';
import ModalLogin from '../Modal/ModalLogin';
import ModalRegister from '../Modal/ModalRegister';

export default function NavPublic ()  {

    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false);
    const handleModalLogin = () => setModalLogin(!modalLogin)
    const handleModalRegister = () => setModalRegister(true)

    const handleSwitchRegister = () => {
        setModalRegister(true)
        return(setModalLogin(false))
     }
     const handleSwitchLogin = () => {
        setModalLogin(true)
        return(setModalRegister(false))
     }
    
  return (

        <>
            <Stack direction="horizontal" gap={3} >
                <Button  onClick={handleModalLogin} className="btn px-5 outline-red " >Login</Button>
                
                <Button  onClick={handleModalRegister}  className="bg-red px-5">Register</Button>
            </Stack>
                <ModalLogin show={modalLogin} onHide={() => setModalLogin(false)} handleSwitchRegister={handleSwitchRegister}  />
                <ModalRegister show={modalRegister} onHide={() => setModalRegister(false)} handleSwitchLogin={handleSwitchLogin} />
        </>
    )
};
