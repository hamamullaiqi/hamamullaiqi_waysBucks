import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import PopupOrder from '../Modal/PopupOrder';
import NavUser from '../Navbar/NavUser';
import { API } from '../../config/api';
import { UserContext } from '../../context/userContext';
import OrderItem from '../elements/OrderItem';
import { useParams } from 'react-router-dom';
import ModalDelete from '../Modal/ModalDelete';
const convertRupiah = require('rupiah-format')




export default function CartPage() {

    

    const [modalPopupOrder, setModalPopupOrder] = useState(false)
    const [state, dispatch] = useContext(UserContext)
    const [modalDelete, setModalDelete] = useState(false)
    const [idDelete, setIdDelete] = useState(null);
    const [deleteOrder, setDeleteOrder] = useState(null);
    const handleClose = () => setModalDelete(false);
    const handleShow = () => setModalDelete(true);

    // console.log(idDelete);


    const [orders, setOrders] = useState([])
    // console.log(orders);
    
    const { id } = useParams()

    // console.log(id);
    
    

    const getOrders = async () => {
        try {

            const response = await API.get(`/order-list/${id}`)
            setOrders(response.data.data.order) 
           
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getOrders()
    }, [])


    const handleDelete = (id) => {
        setIdDelete(id)
        handleShow()
    }
    const deleteById = async (id) => {
        try {
            await API.delete(`/order-list/${id}`)
            getOrders()
            
            
        } catch (error) {
            console.log();
        }
    }
    useEffect(() => {
        if (deleteOrder) {

          handleClose();

          deleteById(idDelete);
          setDeleteOrder(null);
        }
      }, [deleteOrder]);

    
      const totalPay = orders.reduce((subTotal, element) => {
            return subTotal + element.sub_total
        }, 0)

    const idOrder = orders.map((idOrder) => idOrder.id)

    console.log(idOrder);

  return (
    <>
    <NavUser />

      <div className='CartPage mb-5'>
        <Container>
            <Row>
                
                <h3 className='text-red text-bold mb-5'>My Cart</h3>
                <h4 className='text-red'>Review Your Order</h4>

                        {/* table card-list */}
                        
                        <Col lg={7}>
                            <hr className='horizline'/>
                            <div className='cart-list'>
                                {orders.length !== 0 ? (

                                    <>
                                        {orders.map((item) => (
                                            <div key={item.id} >

                                            <Row className=' align-items-center' >
                                            <Col  lg={2}>
                                                <img 
                                                    src={item.product.image}
                                                    alt={item.product.title}
                                                    style={{
                                                        width: "6rem",
                                                        height: "6rem",
                                                        objectFit: "cover",
                                                        borderRadius: "8px"
                                                    }}
                                                />
                            
                                            </Col  >
                                            <Col lg={7}>
                                                
                                                    <h5 className='text-bold text-red' >{item.product.title}</h5>
                                                    <p className='d-inline text-red  '>Toping :</p> 
                                                    {item.toppings.map(topping => <span className='d-inline text-red' key={topping.id}> {topping.title},</span> )}
                                                    
                                            </Col>
                                            <Col lg={3} className=' text-end'>
                            
                                                <h6 className=' text-red'> {convertRupiah.convert(item.sub_total)}</h6>
                                                <img 
                                                    src='../img/delete.svg'
                                                    width={16}
                                                    height={20}
                                                    alt='delete-img'
                                                    onClick={() => handleDelete(item.id)}
                                                />  
                                            </Col>
                                                <hr className='horizline mt-3'/>

                                        </Row>
                                        </div>

                                             
                                        )
                                            
                                           
                                       
                                                
                                            
                                        )}
                                    </>

                                ) : (
                                    <div>
                                            <p>Tidak Ada Data</p>
                                    </div>
                                )}
                            

                            

                        </div>

                        {/*  End table card-list */}

                        <Row className='text-red align-items-center '>
                            <Col lg={6} className=''>

                                <hr className='horizline'/>

                                    <div className='d-flex justify-content-between'>
                                        <p>Sub Total</p>
                                        <p>{convertRupiah.convert(totalPay)}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Qty</p>
                                        <p>{orders.length}</p>
                                    </div>
                                <hr className='horizline'/>

                                    <div className='d-flex justify-content-between text-bold'>
                                        <p>Total</p>
                                        <p>{convertRupiah.convert(totalPay)}</p>
                                    </div>
                            </Col>

                            <Col lg={5} className='offset-lg-1' >
                               
                                <Card className='red-opacity outline-red text-center p-3  '>
                                    <Form>
                                        <Form.Label htmlFor='input-attache'>
                                            <Form.Control 
                                                id="input-attache"
                                                className="red-opacity  p-2 mb-4 border-2 border-danger w-100 input-file "
                                                type="file" 
                                            />
                                            <img 
                                                src='../img/attache.svg'
                                                alt='attache-svg'
                                                width={43.75}
                                                height={50}
                                                className='m-auto mb-3'
                                            />
                                            <h6>Attache of Transaction</h6>
                                        </Form.Label>
                                        
                                    </Form>
                                    
                                </Card>
            


                                
                            </Col>
                            

                        </Row>
                        </Col >
                        
                        <Col lg={4} className='offset-lg-1'>
                            <Form>
                            <Form.Group>
                                <Form.Control
                                    className="red-opacity mb-4 p-2 border-2 border-danger"
                                    type="text"
                                    id="inputName"
                                    placeholder="Full Name"
                                />  
                                                
                                <Form.Control
                                    className="red-opacity mb-4 p-2 border-2 border-danger"
                                    type="email"
                                    id="inputEmail"
                                    placeholder="Email"
                                />
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    type="number"
                                    id="inputPhone"
                                    placeholder="Phone"
                                />
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    type="number"
                                    id="inputPosCode"
                                    placeholder="Pos Code"
                                /> 
                                <Form.Control
                                    className="red-opacity  p-2 mb-4 border-2 border-danger"
                                    as="textarea"
                                    placeholder="Address"
                                    id="inputAddress"
                                    style={{ height: '150px' }}
                                />

                                <Button onClick={() => {setModalPopupOrder(!modalPopupOrder)}} className="btn-red bg-red mb-3 w-100" variant="light" >Pay</Button>
                            </Form.Group>

                            
                            </Form>
                               

                        </Col>
                
            </Row>

            <PopupOrder show={modalPopupOrder} onHide={() => setModalPopupOrder(false)} />
            <ModalDelete show={modalDelete} setDeleteOrder={setDeleteOrder} handleClose={handleClose}/>

            
            
        </Container>

                             
        

      </div>
     </> 
  )
};

