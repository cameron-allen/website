import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./index.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Navbar className="top-bar" expand="md" variant="dark">
      <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" 
      className="mx-2" style={{border: "none"}}/>
      <Navbar.Collapse id="basic-navbar-nav" className={showMenu ? "show" : ""}>
        <Nav className="mx-2">
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </ LinkContainer>
          <LinkContainer to='/about'>
            <Nav.Link>About</Nav.Link>
          </ LinkContainer>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;