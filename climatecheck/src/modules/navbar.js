import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

const NavbarModule = () => {
  return (
    <Navbar bg='primary' variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">ClimateCheck</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/global-warming"> Global Waring</Nav.Link>
            <Nav.Link as={Link} to="/co2">CO2</Nav.Link> 
            <Nav.Link as={Link} to="/ch4">Methane</Nav.Link>
            <Nav.Link as={Link} to="/no2">NO2</Nav.Link>
            <Nav.Link as={Link} to="/polar-ice">Polar Ice</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarModule;