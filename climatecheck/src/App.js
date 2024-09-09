import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import NavbarModule from './modules/navbar';
import Cards from './modules/cards';

function App() {
  return (
    <body>
   <NavbarModule/>

    <Container fluid className="d-inline-flex p-4 justify-content-center">
      <h2>Welcome to <span className="highlighted-word font-weight-bold text-primary">Climate Check</span></h2>
    </Container>
    <Container className='d-inline-flex p-4 justify-content-center w-100'>
      <p className='h5 position-absolute  start-50 translate-middle'>Here you can check some graphs about global climate </p>
    </Container>

    <Cards></Cards>
    </body>
    
  );
}

export default App;
