
import React, { useState } from 'react';
import Header from './Header';
import { Container, Row, Col, Button, Badge  } from "react-bootstrap";
import SelectToping from './SelectToping';

const DetailProduct = () => {

    const [selectToping, setSelectToping] = useState({
        checkToping : false,
    })

    console.log(selectToping);
    
    const checkedToping = () => {
        setSelectToping ( {
            ...selectToping,
            checkToping :  !selectToping.checkToping
        })
    }

  
    

  return (
       
      <div className='DetailProduct mb-5 '>

          <Container>
            <Row className=''>

                <Col lg={5}>

                    <img 
                        src='./img/productDet1.png'
                        alt='product-detail'
                        
                        
                        
                />
                
                </Col>

                <Col lg={7}>
                    <h1  className="text-red text-bold mb-4">Ice Coffee Palm Sugar</h1>
                    <h4 className='mb-5 text-red'>Rp.27.000</h4>

                    <h5 className="text-red text-bold  " >Toping</h5>
                    <Row className='mb-5'>
                        
                        <Col lg={3} className='text-center p-2'>
                           
                            <div onClick={checkedToping}>
                                <img
                                    src='./img/Bubble-Tea-Gelatin.png'
                                    alt='Bubble Tea Gelatin'
                                    
                                    
                                />

                               { selectToping.checkToping && <SelectToping />} 
                               
                                <p className='text-red'>Bubble Tea Gelatin</p>
                                
                            </div> 
                        </Col>

                        <Col lg={3} className='text-center p-2'>
                            <div onClick={checkedToping}>
                                <img
                                    src='./img/Manggo.png'
                                    alt='Manggo'
                                    
                                
                                />
                                { selectToping.checkToping && <SelectToping />} 
                                <p className='text-red'>Manggo</p>

                            </div>
                            
                        </Col>


                        <Col lg={3} className='text-center p-2'>
                            <img
                                src='./img/Green-Coconut.png'
                                alt='Green Coconut'
                                
                            
                            />
                             { selectToping.checkToping && <SelectToping />} 
                            <p className='text-red'>Green Coconut</p>
                        </Col>

                        <Col lg={3} className='text-center p-2'>
                            <img
                                src='./img/Boba-Manggo.png'
                                alt='Boba Manggo'
                                
                            
                            />
                             { selectToping.checkToping && <SelectToping />} 
                            <p className='text-red'>Boba Manggo</p>
                        </Col>

                        <Col lg={3} className='text-center p-2'>
                            <img
                                src='./img/Bill-Berry-Boba.png'
                                alt='Bill Berry Boba'
                                
                            
                            />
                             { selectToping.checkToping && <SelectToping />} 
                            <p className='text-red'>Bill Berry Boba</p>
                        </Col>

                        <Col lg={3} className='text-center p-2'>
                            <img
                                src='./img/Kiwi-Popping-Pearl.png'
                                alt='Kiwi Popping Pearl'
                                
                            
                            />
                             { selectToping.checkToping && <SelectToping />} 
                            <p className='text-red'>Kiwi Popping Pearl</p>
                        </Col>

                        <Col lg={3} className='text-center p-2'>
                            <img
                                src='./img/Matcha-Cantaloupe.png'
                                alt='Matcha Cantaloupe'
                                
                            
                            />
                             { selectToping.checkToping && <SelectToping />} 
                            <p className='text-red'>Matcha Cantaloupe</p>
                        </Col>

                        <Col lg={3} className='text-center p-2'>
                            <img
                                src='./img/Strawberry-Popping.png'
                                alt='Strawberry Popping'
                                
                            
                            />
                             { selectToping.checkToping && <SelectToping />} 
                            <p className='text-red'>Strawberry Popping</p>
                        </Col>
                    </Row>
                    <Row className='mb-5 '>
                        <Col lg={6}>
                            <h4 className='text-red text-bold'>Total</h4>
                        </Col>
                        <Col lg={6}>
                            <h4 className='text-red text-bold text-end'>Rp.27.000</h4>

                        </Col>
                    </Row>
                    <Button className='bg-red w-100 mb-5'>Add Cart</Button>
                    
                
                </Col>
            </Row>      
          </Container>
          

      </div>
   


  );
};

export default DetailProduct;
