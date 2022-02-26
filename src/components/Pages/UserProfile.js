import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card,Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { API } from '../../config/api';
import NavUser from '../Navbar/NavUser';
const convertRupiah = require('rupiah-format')


const UserProfile = () => {


    const  { id } = useParams()

    const [userProfile, setUserProfile] = useState([])
    const [user, setUser] = useState([])
    const [transaction, setTransaction] = useState([])
    const [transactionOrder, setTransactionOrder] = useState([])
    const [orderList, setOrderList] = useState([])
    console.log(orderList);


    const getProfile = async () => {
        try {

            const response = await API.get(`/profile/${id}`)
            setUserProfile(response.data.data.dataProfile)
            setUser(response.data.data.dataProfile.user)

        } catch (error) {
            console.log(error);
        }

        
    }
    

    const getTransactionOrder = async () => {
        try {

            const response = await API.get(`/order-transaction/${id}`)
            setTransactionOrder(response.data.data.dataTransaction)
            setOrderList(response.data.data.orderList)
            
            
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getTransactionOrder()
        return () => 
            setTransactionOrder([])
        
   },[])

   useEffect(()=>{
    getProfile()
    return () => 
        setUserProfile([])
    
},[])


   const getTransaction = async () => {
    try {

        const response = await API.get(`/transaction/${id}`)
        setTransaction(response.data.data.dataTransaction)
        
        
        
        
    } catch (error) {
        
    }
}

useEffect(()=>{
    getTransaction()
    return () => 
        setTransaction([])
    
},[])


    

  return (

    

    <>
    
        <NavUser />
        <div className='mb-5'>
            <Container>

                <Row>
                    <Col lg={6}>
                        <h4 className='mb-5 text-bold text-red'>My Profile</h4>
                            <Row>
                                {userProfile.lenght !== 0 ? (
                                    <>
                                    
                                        <Col lg={5}>
                                            <img 
                                                src={userProfile.image}
                                                alt={user.fullname}
                                                style ={{
                                                    width: "12rem",
                                                    height: "16rem",
                                                    objectFit :"cover",
                                                    borderRadius: "8px" 
                                                }}
                                            />
                                        </Col >
                                        <Col  >
                                            <div className='mb-5'>
                                                <h5 className='text-bold '>Full Name</h5>
                                                <p>{user.fullname}</p>
                                            </div>
                                            <div className='mb-5'>
                                                <h5 className='text-bold '>Email</h5>
                                                <p>{user.email}</p>
                                            </div>
                                            
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col lg={5}>
                                            <img 
                                                src='./img/photoProfile.svg'
                                            />
                                        </Col >
                                        <Col  >
                                            <div className='mb-5'>
                                                <h5 className='text-bold '>Full Name</h5>
                                                <p>-</p>
                                            </div>
                                            <div className='mb-5'>
                                                <h5 className='text-bold '>Email</h5>
                                                <p>-</p>
                                            </div>
                                            
                                        </Col>
                                    </>
                                ) }
                               
                            </Row>
                    
                    </Col>
                    
                    <Col lg={6}>
                        <h4 className='text-bold'>My Transaction</h4>
                        <Card className='red-opacity p-3 card-transaction text-red'>
                            <Row>
                                {transactionOrder.length !== 0 ? (
                                   
                                   

                                            <Col lg={8} >
                                                <Row className='p-2 '>
                                                     <>
                                                {orderList.map((item) => (
                                                    <>
                                                    <Col lg={3}>
                                                        <img 
                                                            src={item.product.image}
                                                            alt= {item.product.title}
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
                                                        <h6 className='text-bold '>{item.product.title}</h6>
                                                        <p><span className='text-bold'>Saturday</span>, 5 March 2020</p>
                                                   
                                                        <p className='d-inline-block text-bold '>Topping : </p>
                                                         {item.toppings.map(topping => <span className='d-inline text-red' key={topping.id}> {topping.title},</span>)}
                                                        <div>
                                                            <p className='text-bold mt-3 '> Price
                                                                <span >  {convertRupiah.convert(item.sub_total)}</span>
                                                            </p>
                                                        </div>
                                                       
                                                    </Col>
                                                     </>
                                                     ) )}
                                                </>

                                                </Row>
                                               


                                            </Col>

                                    
                                   
                                    
                                    

                                ) : ( <p>KOSONG</p> )}


                                <>
                                    {transaction.map((item) => (

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
                                                        {item.status}
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <p className='text-bold'>Sub Total : {convertRupiah.convert(item.total_pay)} </p>
                                                </div>
                                        </Col> 

                                    ))}
                                </>

                                     
                                
                            </Row>

                        </Card>
                    </Col>
                    
                    
                    
                </Row>

            </Container>

        </div>
    
    </>
      
  );
};

export default UserProfile;
