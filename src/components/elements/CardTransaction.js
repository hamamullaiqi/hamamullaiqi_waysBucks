import React from 'react'
import { Card,Row, Col,Badge } from 'react-bootstrap'
const convertRupiah = require('rupiah-format')


function CardTransaction({transaction}) {
    console.log(transaction);

    
  return (
            <div>

                <Card className='red-opacity p-3 card-transaction text-red mb-3'>
                    <Row>
                        
                        {transaction.order_transaction.map(item => (
                            <Col lg={8} >
                            <Row className='p-2 '>
                                
                                <Col lg={3}>
                                    <img 
                                        src={item.order_lists.product.image}
                                        alt= {item.order_lists.product.title}
                                        style= {{
                                            width : "5rem",
                                            height : "7rem",
                                            objectFit : "cover",
                                            borderRadius : "4px"
                                        }}
                                        className="shadow-sm"
                                    
                                    
                                    />
                                </Col>
                                <Col lg={8} className='ms-1'>
                                    <h6 className='text-bold '>
                                        {item.order_lists.product.title}
                                    </h6>
                                    <p><span className='text-bold'>Saturday</span>, 5 March 2020</p>
                                
                                    <p className='d-inline-block text-bold '>Topping : </p>
                                        
                                       {item.order_lists.toppings.map(toppings =>  <span className='d-inline text-red'  key={toppings.id}> {toppings.title}, </span>) } 
                                    <div>
                                        <p className='text-bold mt-3 '> Price :
                                        
                                            <span > 
                                                {convertRupiah.convert(item.order_lists.sub_total)}  
                                            </span>
                                        </p>
                                    </div>
                                    
                                </Col>
                                

                            </Row>
                            


                        </Col>
                        ))}
                        
                        <Col lg={4} className='text-center '>
                                <div>
                                    <img 
                                        src='../img/logo.svg'
                                        alt='logo'
                                        width={60}
                                        className='mb-3'

                                        
                                    />
                                </div>
                                <div>
                                    <img 
                                        src='../img/barcode.png'
                                        alt='logo'
                                        width={74}
                                        className='mb-3'

                                        
                                    />
                                    
                                </div>
                                <div>
                                    <Badge bg="info px-3 py-2 w-100 text-bold mb-3">
                                        {transaction.status}
                                    </Badge>
                                </div>
                                <div>
                                    <p className='text-bold'>Sub Total : </p>
                                        {convertRupiah.convert(transaction.total_pay)}  
                                    
                                </div>
                        </Col> 

                            

                    </Row>
                </Card>

            </div>
  )
}

export default CardTransaction