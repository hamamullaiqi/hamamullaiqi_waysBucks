
import React from "react";
import {Modal, Col, Row, Badge, Card} from "react-bootstrap"

export default function Transaction(props) {
     console.log(props);
    return(
        <Modal show={props.show} onHide={props.onHide} dialogClassName="modal-md" centered  >
                           
                            <Modal.Body className="card-transaction red-opacity rounded" >
                                
                                        
                           
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
                                    <Col className='ms-3'>
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
                                    <Col className='ms-3'>
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

                    
                                
                               
                            </Modal.Body>
                        </Modal>
                        
    )
    
}
