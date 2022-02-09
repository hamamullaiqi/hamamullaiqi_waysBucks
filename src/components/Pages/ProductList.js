import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import '../css/ProductList.css'
import { Link } from "react-router-dom"
import ModalLogin from '../Modal/ModalLogin'



export default function ProductList() {
   const [state, setState] = useState(true) 
   
   

    console.log();
    
        
        return (
            <div className="product-list mb-5">
                <Container>
                    <h1 className="text-red text-bold mb-4">Let's Order</h1>
                    <Row>
                        <Col >

                                <Card style={{ width: '16rem' }}  onClick={() => setState(true)} >
                                    <Link to="/detail-product">
                                        <Card.Img variant="top" src="/img/product-1.png" />
                                            <Card.Body className="red-opacity">
                                                <Card.Title className="text-red text-bold">Ice Coffee Palm Sugar</Card.Title>
                                                <Card.Text> 
                                                    Rp.27.000
                                                </Card.Text>
                                            </Card.Body>
                                    </Link>
                                </Card>
                           
                        </Col>
                        <Col >
                            <Link to="/detail-product">
                                <Card style={{ width: '16rem' }}  >
                                    <Card.Img variant="top" src="/img/product-1.png" />
                                        <Card.Body className="red-opacity">
                                            <Card.Title className="text-red text-bold">Ice Coffee Palm Sugar</Card.Title>
                                            <Card.Text> 
                                                Rp.27.000
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col >
                            <Link to="/detail-product">
                                <Card style={{ width: '16rem' }}  >
                                    <Card.Img variant="top" src="/img/product-1.png" />
                                        <Card.Body className="red-opacity">
                                            <Card.Title className="text-red text-bold">Ice Coffee Palm Sugar</Card.Title>
                                            <Card.Text> 
                                                Rp.27.000
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col >
                            <Link to="/detail-product">
                                <Card style={{ width: '16rem' }}  >
                                    <Card.Img variant="top" src="/img/product-1.png" />
                                        <Card.Body className="red-opacity">
                                            <Card.Title className="text-red text-bold">Ice Coffee Palm Sugar</Card.Title>
                                            <Card.Text> 
                                                Rp.27.000
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        
                    </Row>

                    

                    
                    {state && <ModalLogin show={state} onHide={()=>setState(false)} />}
                    

                </Container>

               
            </div>
        )
    }
