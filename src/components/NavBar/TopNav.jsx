import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        Search across '3.3 crore +' Products & Services
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Button variant="success" className="mr-2">
            <BsDownload className="mr-1" />
            Download App
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
