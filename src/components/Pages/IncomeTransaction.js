import React, { useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import ModalTransaction from '../Modal/ModalTransaction';

const IncomeTransaction = () => {

    const [state,setState] = useState(false)



  return (
      <div className='IncomeTransaction mb-5'>

        <Container>
            <h1 className='text-bold text-red mb-5'>Income Transaction</h1>

            <Table  bordered >
                <thead  className='bg-light-grey text-bold '>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Post Code</th>
                        <th>Income</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sugeng No Pants</td>
                        <td>Cileungsi</td>
                        <td >16820 </td>
                        <td onClick={()=> setState(true)}>69.000</td>
                        <td className='text-warning'>Waiting Approve</td>

                        <td className='d-flex justify-content-center'>
                            <Button variant='danger me-3 rounded-pill '>Cancel</Button>
                            <Button variant="success rounded-pill">Approve</Button>


                        </td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Haris Gams</td>
                        <td>Serang</td>
                        <td>42111</td>
                        <td>30.000</td>
                        <td className='text-success'>Success</td>
                        
                        <td className='d-flex justify-content-center'>
                            <img 
                                src='./img/check.svg'
                            />


                        </td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Aziz Union</td>
                        <td>Bekasi</td>
                        <td>13450</td>
                        <td>28.000</td>
                        <td className='text-danger'>Cancel</td>
                        
                        <td className='d-flex justify-content-center'>
                            <img 
                                src='./img/cancel.svg'
                            />


                        </td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Lae Tanjung Balai </td>
                        <td>Tanjung Balai</td>
                        <td>21331</td>
                        <td>30.000</td>
                        <td className='text-primary'>On The Way</td>
                        
                        <td className='d-flex justify-content-center'>
                            <img 
                                src='./img/check.svg'
                            />


                        </td>

                    </tr>
                    
                   
                   

                </tbody>
            </Table>


        </Container>

        {state && <ModalTransaction show={state} onHide={()=>setState(false)} />}
      </div>

  );
};

export default IncomeTransaction;
