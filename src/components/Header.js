import React, {  useState, } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { NavPublic } from "./NavPublic";
import NavUser from "./NavUser";
import NavAdmin from "./NavAdmin";





export default function Header()  {

        const [modalLogin, setModalLogin] = useState(false);
        const [modalRegister, setModalRegister] = useState(false);
        const [isLogin, setIsLogin] = useState(false)
        const [isAdminLogin, setAdminIsLogin] = useState(false)

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
                            { isLogin && <NavUser handleLogout = {handleLogout}/>}
                            { isAdminLogin && <NavAdmin handleLogout = {() => setAdminIsLogin(false)}/>}
                            { (!isLogin && !isAdminLogin) && <NavPublic handleModalLogin = {() => setModalLogin(true)} handleModalRegister = {() => setModalRegister(true)} />}


                            {/* { 
                                isLogin ? ( 
                                    <NavUser handleLogout = {handleLogout} />

                                ) : (
                                   <NavPublic handleModalLogin = {() => setModalLogin(true)} />
                                ) 
                            } */}
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
