import React, {  useState, } from "react";
import { Navbar, Container, Nav, Button, Stack, Dropdown,NavDropdown, DropdownButton} from 'react-bootstrap';
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { Link, Navigate, useNavigate } from "react-router-dom"




export default function Header()  {

        const [modalLogin, setModalLogin] = useState(false);
        const [modalRegister, setModalRegister] = useState(false);
        const [isLogin, setIsLogin] = useState(false)

        const navigate = useNavigate()

        const handleLogout = () => {
            setIsLogin(false)
            return navigate(`/`)
        }

        



        


        return (
            <div className="Navbar" >
                <Navbar expand="lg"className="py-4 mb-5"  >
                    <Container fluid className="justify-content-between ms-5 me-5">
                        <Navbar.Brand >
                            <Link to="/">
                            
                            
                            <img 
                                src="/img/logo.svg"
                                width="80"
                                height="80"
                                alt="logo"
                            />
                            </Link>
                        </Navbar.Brand>
                        
                        <Nav >
                           {/* Condition User Login and No Login */}
                            { 
                                isLogin ? ( 
                                    <Stack direction="horizontal" gap={3} >
                                        <Link to="/card-page">
                                            <div>
                                                <img 
                                                    src="./img/cart.svg"
                                                    alt="cart"
                                                />
                                            </div>
                                        </Link>
                                        
                                        
                                        <Dropdown align="end" id="dropdown-menu-align-end">
                                            <Dropdown.Toggle  as={Nav.Link} className='Dropdown-Toggle' >
                                                <img
                                                    src="./img/avatar-user.png"
                                                    alt="avatar-user"
                                                /> 
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className=" text-bold text-dark">
                                                <Dropdown.Item >
                                                    <Link to="/user-profile">
                                                        <span>
                                                            <img
                                                                src="./img/user.svg" 
                                                                alt="user-profile"
                                                                width={30}
                                                                height={30}
                                                                className="me-3"
                                                            />
                                                        </span>Profile
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />    
                                                <Dropdown.Item onClick={handleLogout}>
                                                    
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
                        handleLogin = {()=> {
                            setIsLogin(true)
                            return(setModalLogin(false))
                        }}
                        handleRegister = {() => {
                            setModalRegister(true)
                            return(setModalLogin(false))
                        }}
                    />
                    <ModalRegister 
                        show={modalRegister}
                        onHide={() => setModalRegister(false)}
                        handleRegister = {() => {
                            setModalLogin(true)
                            return(setModalRegister(false))
                        }}
                        handleLogin = {()=> {
                            setModalLogin(true)
                            return(setModalRegister(false))
                        }}
                    />
                           
                    </Container >
                </Navbar>
            </div>
        );
    }
