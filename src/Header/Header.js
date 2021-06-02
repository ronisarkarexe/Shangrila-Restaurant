import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Nav , Navbar} from 'react-bootstrap';


const Header = () => {
   return (
      <section className="section-color">
            <Navbar expand="lg">
                <Navbar.Brand className="shanG" href="#home">ShanGrila</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="me-3 header-tex" href="#home">Home</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">About</Nav.Link>
                    <Nav.Link className="me-3 header-tex" as={Link} to="/reservation">Reservation</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">Menu</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">Gallery</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#blog">Blog</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">Shop</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">Contact</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="/admin">Admin</Nav.Link>
          
                </Nav>
                </Navbar.Collapse>
            </Navbar>
      </section>
   );
};

export default Header;