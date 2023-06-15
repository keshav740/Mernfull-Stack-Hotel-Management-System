import React from 'react'
import Layout from '../../../Layout'
import { Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
 <>
 <Layout>
     <Container >
      <Row>
      <div className='home-container'>
        <img className='home-container-fill' src="home-banner.gif"/>
      </div>
      </Row>
     </Container>
 </Layout>
 
 </>
  )
}

export default Home