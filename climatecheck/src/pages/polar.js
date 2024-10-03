import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import alertimg from '../modules/media/bAllert.png'


function PolarIcePage() {
   
    return (
        <div>
            <Container fluid className="text-center d-flex flex-column p-4 justify-content-center">
                <h3 className="text-wrap w-100">This is a chart that shows the rising global temperature since 1880</h3>
                <h5 className="text-wrap w-100">If reading from a phone, it is suggested to keep the phone horizontal as the graph is quite large.</h5>
            </Container>

            <Container className='bg-primary text-center '>
                <h1 className='text-white '>THE API IS CURENTLY UNAVAIBLE, THE GRAPH WILL BE READY AS SOON AS THE API WORKS AGAIN</h1>
                
            </Container>

            <Container>
                  <img src={alertimg} className="img-fluid w-50 h-50 mx-auto d-block mt-3" alt="..." />
            </Container>
        </div>
    );
}

export default PolarIcePage;