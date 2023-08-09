import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BsDownload } from "react-icons/bs";

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Navbar.Brand className="font-weight-bold">
        Search across <span className="text-primary">'3.3 crore +'</span>{" "}
        Products & Services
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Button variant="outline-light" className="mr-2">
            <BsDownload className="mr-1" />
            <span>Download App</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
