import React from 'react'
import { Card } from 'react-bootstrap'

const CardProduct = () => {
  return (
    <Card style={{ width: '16rem' }}  >
                                                                         
        <Card.Img variant="top" src="/img/product-1.png"   />
            <Card.Body className="red-opacity">
                <Card.Title className="text-red text-bold">Ice Coffee Palm Sugar</Card.Title>
                <Card.Text> 
                    Rp.27.000
                </Card.Text>
            </Card.Body>

    </Card>
  )
}

export default CardProduct