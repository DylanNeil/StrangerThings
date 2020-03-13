import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Navigation() {
  return (
  
    <Navbar fixed="top" className="color-nav" collapseOnSelect expand="md" >
      <Navbar.Brand href="#home">Stranger Things</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="menu">
          <Nav.Link href="#episodes">Episodes</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}



export default Navigation;
