import React, { useState, useContext } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import '../css/ProductList.css'
import { Link } from "react-router-dom"
import ModalLogin from '../Modal/ModalLogin'
import ModalRegister from "../Modal/ModalRegister";
import CardProduct from "../elements/CardProduct";
import { UserContext } from "../../context/userContext";




export default function ProductList() {
    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false);
    
    const [state, dispatch] = useContext(UserContext)
    

    const handleSwitchRegister = () => {
        setModalRegister(true)
        return(setModalLogin(false))
     }
     const handleSwitchLogin = () => {
        setModalLogin(true)
        return(setModalRegister(false))
     }

     
     

     const showModal = () => {
        setModalLogin(true)
        
    }

     
   
   
   

    console.log();
    
        
        return (
            <>
            <div className="product-list mb-5"   >
                <Container > 
                    <h1 className="text-red text-bold mb-4">Let's Order</h1>
                    <Row>
                        <Col >
                            {
                                state.isLogin ? 
                                <Link to="/detail-product" >
                                    <CardProduct />
                                </Link>
                                :
                                <div  onClick={()=> setModalLogin(true)}> 
                                    <CardProduct />
                                </div>
                            }    
                                
                                
                           
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

                    

                    
                   

                </Container>

                { modalLogin && <ModalLogin show={modalLogin} onHide={() => setModalLogin(false)} handleSwitchRegister={handleSwitchRegister}  />}
                { modalRegister && <ModalRegister show={modalRegister} onHide={() => setModalRegister(false)} handleSwitchLogin={handleSwitchLogin} />}
                    
            </div>
            </>
        )
    }
