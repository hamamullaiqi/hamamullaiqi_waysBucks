
import React, { useState, useEffect } from 'react';
import Header from '../Navbar/Header';
import { Container, Row, Col, Button, Form, Image} from "react-bootstrap";
import SelectToping from './SelectToping';
import { useParams } from 'react-router-dom';

import { API } from '../../config/api'
import TopingList from '../elements/TopingList';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';

export const data = []

const DetailProduct = () => {
    
    const {id} = useParams()

    
    const [productData, setProductData] = useState([])

    const handleAddCart = () => { 
        const topping = data[0].filter(topping => topping.checked === true)
        
        console.log(topping);
    }

    const [total, setTotal] = useState([])

    console.log(total);

    

   const handleClick = () => {
    const topping = data[0].filter(topping => topping.checked === true)
    console.log(topping);
    console.log(topping.length);

    let priceToppings = topping.map(total => total.price)

    let totalPay = topping.reduce((priceTopping, element) => {
        return priceTopping + element.price
    }, 0)
    
    
    console.log(priceToppings);
    console.log(totalPay);

    setTotal(productData.price + totalPay)
    }  
    

    
   
    
    
   

    const getProduct = async () => {
        try {

            const response = await API.get(`/product/${id}`)

            setProductData(response.data.data.product)
            console.log(response.data.data.product)
            setTotal(response.data.data.product.price)
            
            
        } catch (error) {
            console.log(error)
        }
    }

    

    const [toppings, setToppings] = useState([])

    // const handleChange = {
    //     setTotal()
    // }
    
    
    

    const getToppings = async () => {
        try {

            const response = await API.get("/toppings")

            setToppings(response.data.data.topping)
            console.log(response.data)
            data.push(response.data.data.topping)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        
        getToppings()
        return getProduct()
        
    },[])

    

  
    

  return (
       
      <div className='DetailProduct mb-5 '>

          <Container>
            <Row className=''>
               
               
                     
                    <Col lg={5}>

                    <img 
                        src={productData.image}
                        alt={productData.title}
                        
                        
                        
                    />

                    </Col>


                    <Col lg={7}>
                    <h1  className="text-red text-bold mb-4">{productData.title}</h1>
                    <h4 className='mb-5 text-red'>{productData.price}</h4>

                    <h5 className="text-red text-bold  " >Toping</h5>
                    <Row className='mb-5'>
                        {toppings.length !== 0 ? (
                            <>
                            {toppings.map((item, index) => (
                                <Col lg={3} className='text-center p-2'>
                                
                                  
                                    
                                        <div onClick={handleClick}>
                                            <TopingList item={item} id={item.id}   />   
                                        </div>
                                </Col>
                           

                            ))}
                            </>
                        ) : (
                        <>
                            <p>TOPING KOSONG</p>
                        </>
                        )}
                        
                        
                        
                    </Row>
                    <Row className='mb-5 '>
                        <Col lg={6}>
                            <h4 className='text-red text-bold'>Total </h4>
                        </Col>
                        <Col lg={6}>
                            <h4 className='text-red text-bold text-end'>{total}</h4>

                        </Col>
                    </Row>
                    <Button className='bg-red w-100 mb-5' onClick={handleAddCart}>Add Cart</Button>


                    </Col>


                  
                    
            </Row>      
          </Container>
          

      </div>
   


  );
};

export default DetailProduct;
