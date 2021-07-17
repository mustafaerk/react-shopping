import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

import Logo from "../../logo.svg";

function MainNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Rent Sweet Home
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="about">About Me</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default MainNavbar;
