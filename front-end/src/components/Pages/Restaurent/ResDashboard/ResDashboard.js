import React from 'react'
import { Container, Row } from 'react-bootstrap'
const ResDashboard = () => {
  return (
<>

<marquee className="mar-bg">
        <p className='Dash-title'> Welcome to the Dasboard of Our Hotel ! A hotel dashboard is a tool used by hotel management to monitor and analyze various aspects of their hotel's operations. </p>
      </marquee>
      <Container >
        <Row>
          <div className='dash-img-box'>
            <video className='dash-img-fill' controls autoPlay>
              <source src="/img/item-video.mp4" type="video/mp4"/>
          
                </video>
              </div>
            </Row>
          </Container>
</>
  )
}

export default ResDashboard