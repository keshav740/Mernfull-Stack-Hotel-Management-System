import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
       <Navbar className="nav-container" expand="lg">
      <Container>
        <Link className="logo-link" to="/">Hotel Application</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="item-links" to="/"></Link>
            <Link className="item-links" to="/hotel-dashboard">Hotel</Link>
            <Link className="item-links" to="/restaurent-dashboard">Restaurant</Link>
            <Link className="item-links" to="/main-admin-dashboard">Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    </>
  )
}

export default Header