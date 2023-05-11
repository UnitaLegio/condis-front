import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/ul-logo.svg";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" fixed="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="UnitaLegio Logo" width="32" height="32" className="d-inline-block align-top me-2" />
                    PetInnova
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/showcase">
                            Showcase
                        </Nav.Link>
                        <Nav.Link as={Link} to="/team">
                            Team
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contacts">
                            Contacts
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
