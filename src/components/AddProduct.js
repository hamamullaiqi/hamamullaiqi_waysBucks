import React from 'react';
import { Container, Row, Col, Form,Button } from 'react-bootstrap';

const AddProduct = () => {
  return (
      <div className='AddProduct mb-5'>
          <Container>
             
              <Row >
              
                  <Col lg={6} >
                     <h1 className='text-bold text-red mb-5' >Add Product</h1>
                      <Form >
                        <Form.Group>
                                <Form.Control
                                    className="red-opacity mb-4 p-2 border-2 border-danger"
                                    type="text"
                                    id="inputNameProduct"
                                    placeholder="Name Product"
                                />  
                                                
                                
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    type="number"
                                    id="inputPrice"
                                    placeholder="Price"
                                />
                                
                                    
                                <Form.Label htmlFor='input-file' className='red-opacity  p-2 mb-5 rounded w-100 form-file '>
                                    <Form.Control 
                                        id="input-file"
                                        className="red-opacity  p-2 mb-4 border-2 border-danger w-100 input-file"
                                        type="file" 
                                    />
                                    Photo Product
                                    <span className='float-end  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#BD0707" class="bi bi-paperclip" viewBox="0 0 16 16" >
                                            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"></path>
                                        </svg>
                                    </span >
                                    </Form.Label>
                                    <Row className='justify-content-center'>
                                        <Col lg={10}>
                                            <Button className="btn bg-red mb-3 w-100  " >Add Product</Button>
                                        </Col>
                                    </Row>
                                
                        </Form.Group>
                      </Form>
                  

                  </Col>
                  <Col lg={4} className='offset-lg-1'>

                        <img 

                            src='./img/productDet1.png'
                            alt='product-detail'
                            width={436}
                            height={555}
                                
                        
                        />
                  </Col>
              </Row>
          </Container>
      </div>
  );
};

export default AddProduct;
