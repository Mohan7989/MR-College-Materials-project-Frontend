import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MRCA Students Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="studentshub-navbar" />
        <Navbar.Collapse id="studentshub-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/semester">Semesters</Nav.Link>
            <Nav.Link as={Link} to="/internships">Internships</Nav.Link>
            <Nav.Link as={Link} to="/timetable">Timetable</Nav.Link>
            <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
