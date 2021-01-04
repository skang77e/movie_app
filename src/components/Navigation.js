import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation(){
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/movie_app">Movie App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navigation;