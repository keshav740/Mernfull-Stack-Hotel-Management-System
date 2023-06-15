import React from 'react'
import './Dashboard.css'
import { Container, Row } from 'react-bootstrap'
const Dashboard = () => {
  return (
    <>
      <marquee className="mar-bg">
        <p className='Dash-title'> Welcome to the Dasboard of Our Hotel ! A hotel dashboard is a tool used by hotel management to monitor and analyze various aspects of their hotel's operations. </p>
      </marquee>
      <Container >
        <Row>
          <div className='dash-img-box'>
           <img className='dash-img-fill' src='/img/hotel-banner.jpg' />
              </div>
            </Row>
          </Container>

        </>
        )
}

        export default Dashboard