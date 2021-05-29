import React from 'react';
import { Nav , Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Nav.Link className="me-3 header-tex" href="#link">Blog</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">Shop</Nav.Link>
                    <Nav.Link className="me-3 header-tex" href="#link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
      </section>
   );
};

export default Header;