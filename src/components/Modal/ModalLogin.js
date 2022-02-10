
import React from "react";
import {Modal, Form, Stack, Button} from "react-bootstrap"

export default function ModalLogin(props) {
    
     

    return(
        <Modal show={props.show} onHide={props.onHide} dialogClassName="modal-md" centered   >
                           
                            <Modal.Body className="p-5">
                                <h1 className="text-red text-bold  mb-5   ">Login</h1>
                                <Stack className="d-grid text-center mb-3 " gap={3}>
                                    <Form.Group>
                                        
                                        <Form.Control
                                            className="red-opacity mb-4 p-3 border-2 border-danger"
                                            type="email"
                                            id="inputEmail"
                                            placeholder="Email"
                                        />
                                        <Form.Control
                                            className="red-opacity  p-3 mb-4 border-2 border-danger"
                                            type="password"
                                            id="inputPassword"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder="Password"
                                        />
                                    </Form.Group>

                                    <Button onClick={props.handleLogin} className="btn bg-red btn-lg mb-3" >Login</Button>
                                    <span className="text-bold">Don't have an account ? Click      
                                    <a onClick={props.handleSwitchRegister} href="#" className=" text-red text-bold "> Here</a>
                                    </span>
                                        
                                    
                                </Stack>
                               
                            </Modal.Body>
                        </Modal>
                        
    )
    
}
