import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card,Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { API } from '../../config/api';
import NavUser from '../Navbar/NavUser';
import { UserContext } from '../../context/userContext';
import CardTransaction from '../elements/CardTransaction';


const UserProfile = () => {


    const  { id } = useParams()
    const [state, dispatch] = useContext(UserContext)

    const [user, setUser] = useState([])
    const [userProfile, setUserProfile] = useState([])
    const [transaction, setTransaction] = useState([])
    console.log(transaction);


    
    // console.log(user);

  


    const getProfile = async () => {
        try {

            const response = await API.get(`/profile/${id}`)
            setUserProfile(response.data.data.dataProfile)
            setUser(response.data.data.dataProfile.user)
            

        } catch (error) {
            console.log(error);
        }

        
    }
    

//     

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
        console.log(error);
        
    }
}

useEffect(()=>{
    getTransaction()
    return () => 
        setTransaction([])
    
},[userProfile])


    

  return (

    

    <>
    
        <NavUser />
        <div className='mb-5'>
            <Container>

                <Row>
                    <Col lg={6}>
                        <h4 className='mb-5 text-bold text-red'>My Profile</h4>
                            <Row>
                                
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
                                                <p> {user.fullname}</p>
                                            </div>
                                            <div className='mb-5'>
                                                <h5 className='text-bold '>Email</h5>
                                                <p>{user.email}</p>
                                            </div>
                                            
                                        </Col>
                                 
                                        
                               
                            </Row>
                    
                    </Col>
                    
                    <Col lg={6}>
                        <h4 className='text-bold'>My Transaction</h4>
                        
                      
                           
                        
                            <div>
                                {transaction.length !== 0 ? (
                                    
                                    <>
                                    {transaction.map(transaction => (
                                         <CardTransaction transaction={transaction} key={transaction.id} />
                                    ))}
                                       
                                    </>
                                ) : (<p>Transaction Not Found</p>) }
                                    
           
                            </div>

                       
                        
                       
                    </Col>
                    
                    
                    
                </Row>

            </Container>

        </div>
    
    </>
      
  );
};

export default UserProfile;
