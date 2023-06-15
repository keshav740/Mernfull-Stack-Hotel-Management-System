import React from 'react'
import './Das.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={12}><br /><br />

            <div className='main-card'>
              <h3 className='heading slide-right'>WELCOME TO THE ADMINPANNEL</h3>
            </div>
            <div className="name">
              <p>Dashboard</p>
              <div className="hover">
                <Link href="#" class="link">Hotel Management</Link>
              </div>
            </div>
          </Col>

        </Row>
      </Container>



    </>
  )
}

export default AdminDashboard