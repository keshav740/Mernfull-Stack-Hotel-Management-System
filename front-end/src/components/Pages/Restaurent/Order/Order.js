import React from 'react'
import './Order.css'
import { Button, Container, Row } from 'react-bootstrap'
import { IoIosRemoveCircle } from 'react-icons/io'

const Order = () => {
  return (
    <>

      <Container className='order-section' >
        <p className='bill-text'>Bill</p>
        <hr className='bill-hr' />
        <br />
        <Row className='order-bg'>

          <div className='d-flex'>
            <p className='item-title'>Item-Name-</p>
            <p className='item-content'>Dal Makhni</p>
            <span className='varinat'><Button variant='light'><IoIosRemoveCircle />Remove</Button></span>
          </div>

          <div className='d-flex'>
            <p className='item-Price'>Price- </p>
            <p className='item-Price2'>₹/200</p>
          </div>

          <div className='d-flex'>
            <p className='item-time'>Time : </p>
            <p className='item-time2'>2:08PM</p>
          </div>

          <div className='d-flex'>
            <p className='item-date'>Date : </p>
            <p className='item-date2'>16/06/2023</p>
          </div>
          
          <div className='total'>Totle = 120</div>
  
    
      <center>
         <button className='pay-btn'>Pay</button>
         </center>
        
      
        </Row>
      </Container>

    </>
  )
}

export default Order