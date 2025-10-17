import React from "react";
import { Navbar, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar expand="lg" variant="light" className="mb-4">
      <Container>
        <Navbar.Brand className="fw-bold text-dark">🌷 Task Manager</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
