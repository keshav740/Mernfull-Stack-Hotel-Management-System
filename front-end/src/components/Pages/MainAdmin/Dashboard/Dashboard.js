import React from 'react'
import './Das.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
     <marquee className="mar-bg">
        <p className='Dash-title'> Welcome to the Dasboard of Our Hotel ! A hotel dashboard is a tool used by hotel management to monitor and analyze various aspects of their hotel's operations. </p>
      </marquee>
      <Container >
        <Row>
          <div className='dash-img-box'>
           <img className='dash-img-fill' src='/img/admin.gif' />
              </div>
            </Row>
          </Container>



    </>
  )
}

export default AdminDashboard