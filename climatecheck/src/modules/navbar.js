import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarModule = () => {

return(
<Navbar bg='primary' variant="dark"  expand="lg">
<Container>
  <Navbar.Brand  href="#home">ClimateCheck</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Temperature</Nav.Link>
      <Nav.Link href="#link">CO2</Nav.Link>
      <Nav.Link href="#link">Metano</Nav.Link>
      <Nav.Link href="#link">NO2</Nav.Link>
      <Nav.Link href="#link">Ghiaccio Polare</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
)

}


export default NavbarModule;