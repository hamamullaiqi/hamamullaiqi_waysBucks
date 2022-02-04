import React from 'react';
import { Container, Row, Col, Card,Badge } from 'react-bootstrap';

const UserProfile = () => {
  return (
      <div className='mb-5'>
        <Container>

            <Row>
                <Col lg={6}>
                    <h4 className='mb-5 text-bold text-red'>My Profile</h4>
                        <Row>
                            <Col lg={5}>
                                <img 
                                    src='./img/photoProfile.svg'
                                />
                            </Col >
                            <Col  >
                                <div className='mb-5'>
                                    <h5 className='text-bold '>Full Name</h5>
                                    <p>Hamamul Fikri</p>
                                </div>
                                <div className='mb-5'>
                                    <h5 className='text-bold '>Email</h5>
                                    <p>hamamullaiqi@gmail.com</p>
                                </div>
                                
                            </Col>
                        </Row>
                   
                </Col>
                
                <Col lg={6}>
                    <h4 className='text-bold'>My Transaction</h4>
                    <Card className='red-opacity p-3 card-transaction text-red'>
                        <Row>
                            <Col lg={8} >
                                <Row className='p-2 '>
                                    <Col lg={3}>
                                        <img 
                                            src='./img/productDet1.png'
                                            alt='history-transaction-img'
                                            width={80}
                                            height={97}
                                        
                                        
                                        />
                                    </Col>
                                    <Col className='ms-1'>
                                        <h6 className='text-bold '>Ice Coffe Palm Sugar</h6>
                                        <p><span className='text-bold'>Saturday</span>, 5 March 2020</p>
                                        <p className='d-inline-block text-bold '>Toping</p>
                                        <span>: : Bill Berry Boba, Bubble Tea Gelatin</span>
                                        <p className='text-bold '>Price
                                        <span > Price : Rp.33.000</span>
                                        </p>
                                    </Col>
                                    
                                </Row>
                                <Row className='p-2'>
                                    <Col lg={3}>
                                    <img 
                                        src='./img/productDet1.png'
                                        alt='history-transaction-img'
                                        width={80}
                                        height={97}
                                    
                                    
                                    />
                                    </Col>
                                    <Col className='ms-1'>
                                        <h6 className='text-bold '>Ice Coffe Palm Sugar</h6>
                                        <p><span className='text-bold'>Saturday</span>, 5 March 2020</p>
                                        <p className='d-inline-block text-bold '>Toping</p>
                                        <span>: Bill Berry Boba, Manggo</span>
                                        <p className='text-bold '>Price
                                        <span > Price : Rp.36.000</span>
                                        </p>
                                    </Col>
                                    
                                </Row>
                                
                                
                            </Col>
                            <Col lg={4} className='text-center '>
                                <div>
                                    <img 
                                        src='./img/logo.svg'
                                        alt='logo'
                                        width={60}
                                        className='mb-3'

                                        
                                    />
                                </div>
                                <div>
                                    <img 
                                        src='./img/barcode.png'
                                        alt='logo'
                                        width={74}
                                        className='mb-3'

                                        
                                    />
                                    
                                </div>
                                <div>
                                    <Badge bg="info px-3 py-2 w-100 text-bold mb-3">
                                        On The Way
                                    </Badge>
                                </div>
                                <div>
                                    <p className='text-bold'>Sub Total : Rp.69.000</p>
                                </div>
                            </Col>
                        </Row>

                    </Card>
                </Col>
                
                
                
            </Row>

        </Container>

      </div>
  );
};

export default UserProfile;
