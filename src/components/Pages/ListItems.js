
import { Button, Container, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom"



import { API } from '../../config/api'
import NavAdmin from '../Navbar/NavAdmin';
const convertRupiah = require('rupiah-format')




const ListItems = () => {

  const navigate = useNavigate()


  const [products, setProducts] = useState([])
  const [toppings, setToppings] = useState([])


  const handleAddProduct = () =>{
    navigate("/add-product")
  }

  const handleAddTopping = () =>{
    navigate("/add-toping")
  }


  const getProduct = async () => {
    try {

        const response = await API.get(`/products`)

        setProducts(response.data.data.products)
        console.log(response.data.data.products)
        
        
    } catch (error) {
        console.log(error)
    }
}

const getToppings = async () => {
  try {

      const response = await API.get("/toppings")

      setToppings(response.data.data.topping)
      console.log(response.data)
     
      
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  
  getToppings()
  return getProduct()
  
},[])

  return (
    <>
    
      <NavAdmin />
      <div className='ListItems mb-5'>

        <Container>
            


            <h3 className='text-bold text-red mb-5'>Products List</h3>
            
            <Button variant=" light" className="mb-3  btn-red  bg-red" onClick={handleAddProduct} >Add Product</Button>
            <Table  bordered  >
                <thead  className='bg-red text-bold text-center '>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name Product</th>
                        <th >Price </th>
                        <th >Action </th>
                    </tr>
                </thead>
                {products.length !== 0 ? (
                  <>
                  {products.map((item, index) => (
                    <tbody className='bg-light'>
                    <tr>
                        <td>{index+1}</td>
                        <td>
                          <img 
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "5rem",
                              height: "5rem",
                              objectFit: "cover"
                            }}
                          />
                          
                          
                        
                        </td>
                        <td>{item.title}</td>
                        <td >{convertRupiah.convert(item.price)} </td>
                      
                        <td className='d-flex justify-content-center'>

                          <Button variant="warning me-3" >Edit</Button>
                          <Button variant="danger">delete</Button>
                          
                        </td>

                      

                    </tr>
                </tbody>
                  ) )}
                  </>
                ) : ( <tbody>
                  <tr>
                      <td>1</td>
                      <td>Data Kosong</td>
                      <td>Data Kosong</td>
                      <td >Data Kosong</td>
                      <td >Data Kosong</td>
                  </tr>
              </tbody>)}
              
            </Table>

            <h3 className='text-bold text-red mt-5 mb-5'>Toppings List</h3>
            
            <Button variant=" light" className="mb-3  btn-red  bg-red " onClick={handleAddTopping} >Add Toppings</Button>
            <Table  bordered  >
                <thead  className='bg-red text-bold text-center '>
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Name Product</th>
                        <th >Price </th>
                        <th >Action </th>
                    </tr>
                </thead>
                {toppings.length !== 0 ? (
                  <>
                  {toppings.map((item, index) => (
                    <tbody className='bg-light'>
                    <tr>
                        <td>{index+1}</td>
                        <td>
                          <img 
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "5rem",
                              height: "5rem",
                              objectFit: "cover"
                            }}
                          />
                          
                          
                        
                        </td>
                        <td>{item.title}</td>
                        <td >{convertRupiah.convert(item.price)} </td>
                      
                        <td className='d-flex justify-content-center'>

                          <Button variant="warning me-3" >Edit</Button>
                          <Button variant="danger">delete</Button>
                          
                        </td>

                      

                    </tr>
                </tbody>
                  ) )}
                  </>
                ) : ( <tbody>
                  <tr>
                      <td>1</td>
                      <td>Data Kosong</td>
                      <td>Data Kosong</td>
                      <td >Data Kosong</td>
                      <td >Data Kosong</td>
                  </tr>
              </tbody>)}
              
            </Table>


        </Container>


      </div>

    </>
   
  )
}

export default ListItems