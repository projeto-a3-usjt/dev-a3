import React, { ReactElement } from "react";
import { Navbar, Nav } from 'react-bootstrap';

function Header(): ReactElement {
  return (
    <Navbar bg="warning" variant="light" className="justify-content-between">
      <Navbar.Brand href="#">Restaurante</Navbar.Brand>
      <Nav>
        <Nav.Link href="#" className="btn btn-light">Chamar garçom</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
