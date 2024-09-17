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

<div className='d-flex flex-row position-absolute top-50 start-50 translate-middle '>
    <Cards cardtype={"Gw"} ></Cards>  
    <Cards cardtype={"co2"} ></Cards>
    <Cards cardtype={"ch4"} ></Cards>
    <Cards cardtype={"no2"} ></Cards>
    <Cards cardtype={"polar"} ></Cards>
</div>


    </body>
    
  );
}

export default App;
