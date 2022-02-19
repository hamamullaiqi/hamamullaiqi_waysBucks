
import React, { useState, useEffect } from 'react';
import Header from '../Navbar/Header';
import { Container, Row, Col, Button, Badge  } from "react-bootstrap";
import SelectToping from './SelectToping';


import { API } from '../../config/api'


const DetailProduct = () => {

    

    const [selectToping, setSelectToping] = useState([])

    console.log(selectToping);
    
    

    const [toppings, setToppings] = useState([])

    const getToppings = async () => {
        try {

            const response = await API.get("/toppings")

            setToppings(response.data.data.topping)
            console.log(response.data.data)
            
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getToppings()
    }, [])

    

  
    

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
                        {toppings.length !== 0 ? (
                            <>
                            {toppings.map((item, index) => (
                                <Col lg={3} className='text-center p-2'>
                           
                                <div onClick={()=> setSelectToping(item)} key={index}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        
                                        
                                    />
    
                                   { selectToping === item ? <SelectToping /> : ""} 
                                   
                                    <p className='text-red'>{item.title}</p>
                                    
                                </div> 
                            </Col>

                            ))}
                            </>
                        ) : (
                        <>
                            <p>TOPING KOSONG</p>
                        </>) 
                        }
                        
                        
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
