import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import NavbarModule from './modules/navbar';
import Cards from './modules/cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalWarmingPage from './pages/gw';
import Co2 from './pages/co2'
import MethanePage from './pages/methane';
import NitrousPage from './pages/no2';
import PolarIcePage from './pages/polar';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Climate Check';
  }, []);
  return (
    <div>
    <Router>
      <NavbarModule />
      <Routes>
        <Route path="/" element={
          <>
            <Container fluid className="text-center d-inline-flex p-4 justify-content-center">
              <h2>Welcome to <span className="highlighted-word font-weight-bold text-primary">Climate Check</span></h2>
            </Container>
            <Container className='text-center d-inline-flex p-4 justify-content-center w-100'>
              <p className='h5 position-absolute start-50 translate-middle'>Here you can check some graphs about global climate </p>
            </Container>
            <div className="container d-flex justify-content-center mt-3 mb-5">
              <div className="row d-flex justify-content-center gap-4" style={{ width: '100%' }}>
                <div className="col-12 col-md-4 col-lg-3 d-flex">
                  <Cards cardtype="Gw" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex">
                  <Cards cardtype="co2" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex">
                  <Cards cardtype="ch4" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex">
                  <Cards cardtype="no2" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex">
                  <Cards cardtype="polar" />
                </div>
              </div>
            </div>
          </>
        }/>
        <Route path="/global-warming" element={<GlobalWarmingPage />} />
        <Route path='/co2' element={<Co2/>}/>
        <Route path='/ch4' element={<MethanePage/>}/>
        <Route path='/no2' element={<NitrousPage/>}/>
        <Route path='/polar-ice' element={<PolarIcePage/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
