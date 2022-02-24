import React,{ useContext, useEffect, useState, } from 'react';
import { UserContext } from '../../context/userContext';
import { Navbar,Container, Nav, Stack, Dropdown} from "react-bootstrap"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { API } from '../../config/api'


const NavUser = () => {

    
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)

    const [orders, setOrders] = useState([])
    console.log(orders);

    
    const { id } = state.user


    const getOrders = async () => {
        try {

            const response = await API.get(`/order-list/${id}`)

            setOrders(response.data.data.order)
            
           
           
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getOrders()
    }, [])


    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
        
    }
  return (

            <Navbar expand="lg"className="py-4 mb-5" >
                <Container fluid className="justify-content-between ms-5 me-5">
                    <Navbar.Brand >
                        <Link to="/landing">
                        
                        
                        
                        <img 
                            src="../img/logo.svg"
                            width="80"
                            height="80"
                            alt="logo"
                            

                        />
                        
                        </Link>
                    </Navbar.Brand>
                    
                    <Nav >

                    <Stack direction="horizontal" gap={3} >
                        
                            <div className='position-relative' onClick={() => navigate(`/cart-page/${id}`)}>
                            {orders.length !== 0  ? (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {orders.length} 
                                    
                                </span>
                            ) : ("") }
                            
                                <img 
                                    src="../img/cart.svg"
                                    alt="cart"
                                />
                            </div>
                        
                        
                        
                        <Dropdown align="end" id="dropdown-menu-align-end">
                            <Dropdown.Toggle  as={Nav.Link} className='Dropdown-Toggle' >
                                <img
                                    src="../img/avatar-user.png"
                                    alt="avatar-user"
                                /> 
                            </Dropdown.Toggle>
                            <Dropdown.Menu className=" text-bold text-dark">
                                <Dropdown.Item >
                                    <Link to="/user-profile">
                                        <span>
                                            <img
                                                src="../img/user.svg" 
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
                                            src="../img/logout.svg" 
                                            alt="user-profile"
                                            width={30}
                                            height={30}
                                            className="me-3"
                                        />
                                    </span>Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                                
                        </Dropdown>
                                
                            
                    </Stack>


                        
                            
                    </Nav>
                </Container >
            </Navbar>

    
                
                    
                
    
    );
};

export default NavUser;
