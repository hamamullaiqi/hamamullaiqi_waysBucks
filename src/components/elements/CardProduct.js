import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"


const CardProduct = ({item}) => {


  return (
    <Link to="/detail-product" >
      <Card className='my-' style={{ width: '16rem' }}  >
                                                                          
          <Card.Img variant="top" className='image-card' src={item.image} alt={item.name} />
          
            
              <Card.Body className="red-opacity">
                  <Card.Title className="text-red text-bold">{item.title}</Card.Title>
                  <Card.Text> 
                  {item.price}
                  </Card.Text>
              </Card.Body>

      </Card>
    </Link>
  )
}

export default CardProduct