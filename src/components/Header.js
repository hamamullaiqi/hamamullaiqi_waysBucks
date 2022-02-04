import React, {  useState, } from "react";
import { Navbar, Container, Nav, Button, Stack, Dropdown,NavDropdown, DropdownButton} from 'react-bootstrap';
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";




export default function Header()  {

        const [modalLogin, setModalLogin] = useState(false);
        const [modalRegister, setModalRegister] = useState(false);



        const [isLogin, setIsLogin] = useState(true)



        


        return (
            <div className="Navbar" >
                <Navbar expand="lg"className="py-4 mb-5"  >
                    <Container fluid className="justify-content-between ms-5 me-5">
                        <Navbar.Brand href="#home">
                            <img 
                                src="/img/logo.svg"
                                width="80"
                                height="80"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        
                        <Nav >
                           {/* Condition User Login and No Login */}
                            { 
                                isLogin ? ( 
                                    <Stack direction="horizontal" gap={3} >
                                        <div>
                                            <img 
                                                src="./img/cart.svg"
                                                alt="cart"
                                            />
                                        </div>
                                        
                                        <Dropdown align="end" title="Dropdown end" id="dropdown-menu-align-end">
                                            <Dropdown.Toggle  as={Nav.Link} className='Dropdown-Toggle' >
                                                <img
                                                    src="./img/avatar-user.png"
                                                    alt="avatar-user"
                                                /> 
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className=" text-bold">
                                                <Dropdown.Item href="#">
                                                    <span>
                                                        <img
                                                            src="./img/user.svg" 
                                                            alt="user-profile"
                                                            width={30}
                                                            height={30}
                                                            className="me-3"
                                                        />
                                                    </span>Profile</Dropdown.Item>
                                                <Dropdown.Divider />    
                                                <Dropdown.Item href="#">
                                                    <span>
                                                        <img
                                                            src="./img/logout.svg" 
                                                            alt="user-profile"
                                                            width={30}
                                                            height={30}
                                                            className="me-3"
                                                        />
                                                    </span>Log Out</Dropdown.Item>
                                                
                                            </Dropdown.Menu>
                                                
                                        </Dropdown>
                                                
                                           
                                    </Stack>

                                ) : (
                                    <Stack direction="horizontal" gap={3} >
                                        <Button onClick={() => setModalLogin(true)}  className="px-5 outline-red " >Login</Button>
                                        <Button onClick={() => setModalRegister(true)}  className="bg-red px-5">Register</Button>
                                    </Stack>
                                ) 
                            }
                        </Nav>

                        
                    <ModalLogin 
                        show={modalLogin}
                        onHide={() => setModalLogin(false)}
                    />
                    <ModalRegister 
                        show={modalRegister}
                        onHide={() => setModalRegister(false)}
                    />
                           
                    </Container >
                </Navbar>
            </div>
        );
    }
