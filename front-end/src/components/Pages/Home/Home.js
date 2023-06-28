import React from 'react'
import Layout from '../../../Layout'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
 <>
 
     <Container >
      <Row>
      <Col sm={12}>
      <div className='home-container'>
        <img className='home-container-fill' src="home-banner.gif"/>
      </div>
      </Col>
      </Row>
     </Container>

 
 </>
  )
}

export default Home