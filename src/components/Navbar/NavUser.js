import React from 'react';

import { Nav, Stack, Dropdown,NavDropdown, DropdownButton } from "react-bootstrap"
import { Link } from 'react-router-dom';

const NavUser = (props) => {
  return (
    
                <>
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
                                <Dropdown.Item onClick={props.handleLogout}>
                                    
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
                </>
    
    );
};

export default NavUser;
