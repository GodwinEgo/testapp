import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BsDownload } from "react-icons/bs";

function TopNav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Search across '3.3 crore +' Products & Services
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <button>
            Download App <BsDownload />{" "}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
