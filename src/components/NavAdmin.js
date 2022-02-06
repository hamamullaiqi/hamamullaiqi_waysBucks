import React from 'react';

import { Nav, Stack, Dropdown,NavDropdown, DropdownButton } from "react-bootstrap"
import { Link } from 'react-router-dom';


const NavAdmin = (props) => {
    console.log(props);
  return (
            <>
            
                    <Dropdown align="end" id="dropdown-menu-align-end">
                        <Dropdown.Toggle  as={Nav.Link} className='Dropdown-Toggle' >
                            <img
                                src="./img/avatar-user.png"
                                alt="avatar-user"
                            /> 
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" text-bold text-dark">
                            <Dropdown.Item >
                                <Link to="/add-product">
                                    <span>
                                        <img
                                            src="./img/add-product.svg" 
                                            alt="add-product"
                                            width={30}
                                            height={30}
                                            className="me-3"
                                        />
                                    </span>Add Product
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item >
                                <Link to="/add-toping">
                                    <span>
                                        <img
                                            src="./img/add-toping.svg" 
                                            alt="add-toping"
                                            width={30}
                                            height={30}
                                            className="me-3"
                                        />
                                    </span>Add Toping
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
                            
                        
                
            </>
    )
};

export default NavAdmin;
