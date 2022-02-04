import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const CartPage = () => {
  return (
      <div className='CartPage mb-5'>
        <Container>
            <Row>
                
                <h3 className='text-red text-bold mb-5'>My Cart</h3>
                <h4 className='text-red'>Review Your Order</h4>

                        {/* table card-list */}
                        
                        <Col lg={6}>
                            <hr className='horizline'/>
                            <div className='cart-list'>
                            <Row className='my-3 align-items-center'>
                                <Col  lg={2}>
                                    <img 
                                        src='./img/cart-list.png'
                                        alt='cart-list'
                                    />
                                
                                </Col>
                                <Col lg={7}>
                                    
                                        <h5 className='text-bold text-red' >Ice Coffe Palm Sugar</h5>
                                        <p className='d-inline text-red  '>Toping</p> 
                                        <span className='d-inline text-red  '>: Bill Berry Boba, Bubble Tea Gelatin</span>
                                </Col>
                                <Col lg={3} className=' text-end'>
                                
                                    <h6 className=' text-red'> Rp.33.000</h6>
                                    <img 
                                        src='./img/delete.svg'
                                        width={16}
                                        height={20}
                                        alt='delete-img'
                                    />  
                                </Col>
                            </Row>

                            <Row className='my-3 align-items-center' >
                                <Col  lg={2}>
                                    <img 
                                        src='./img/cart-list.png'
                                        alt='cart-list'
                                    />
                                
                                </Col  >
                                <Col lg={7}>
                                    
                                        <h5 className='text-bold text-red' >Ice Coffe Palm Sugar</h5>
                                        <p className='d-inline text-red  '>Toping</p> 
                                        <span className='d-inline text-red  '>: : Bill Berry Boba, Manggo</span>
                                </Col>
                                <Col lg={3} className=' text-end'>
                                
                                    <h6 className=' text-red'> Rp.33.000</h6>
                                    <img 
                                        src='./img/delete.svg'
                                        width={16}
                                        height={20}
                                        alt='delete-img'
                                    />  
                                </Col>
                            </Row>

                        </div>

                        <hr className='horizline'/>
                        {/*  End table card-list */}

                        <Row className='text-red align-items-center '>
                            <Col lg={6} className=''>

                                <hr className='horizline'/>

                                    <div className='d-flex justify-content-between'>
                                        <p>Sub Total</p>
                                        <p>Rp.69.000</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Qty</p>
                                        <p>2</p>
                                    </div>
                                <hr className='horizline'/>

                                    <div className='d-flex justify-content-between text-bold'>
                                        <p>Total</p>
                                        <p>Rp.69.000</p>
                                    </div>
                            </Col>

                            <Col lg={5} className='offset-lg-1' >
                                <Card className='red-opacity outline-red text-center p-4  '>
                                    <img 
                                        src='./img/attache.svg'
                                        alt='attache-svg'
                                        width={43.75}
                                        height={50}
                                        className='m-auto mb-3'
                                    />
                                    <h6>Attache of Transaction</h6>
                                </Card>
            


                                
                            </Col>
                            

                        </Row>
                        </Col >
                        
                        <Col lg={4} className='offset-lg-1'>
                            <Form>
                            <Form.Group>
                                <Form.Control
                                    className="red-opacity mb-4 p-2 border-2 border-danger"
                                    type="text"
                                    id="inputName"
                                    placeholder="Full Name"
                                />  
                                                
                                <Form.Control
                                    className="red-opacity mb-4 p-2 border-2 border-danger"
                                    type="email"
                                    id="inputEmail"
                                    placeholder="Email"
                                />
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    type="number"
                                    id="inputPhone"
                                    placeholder="Phone"
                                />
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    type="number"
                                    id="inputPosCode"
                                    placeholder="Pos Code"
                                /> 
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    as="textarea"
                                    placeholder="Address"
                                    id="inputAddress"
                                    style={{ height: '150px' }}
                                />

                                <Button className="btn bg-red mb-3 w-100" >Pay</Button>
                            </Form.Group>
                            </Form>
                               

                        </Col>
                
            </Row>
            
        </Container>
      </div>
  )
};

export default CartPage;
