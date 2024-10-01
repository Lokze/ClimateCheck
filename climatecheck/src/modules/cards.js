import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gwimg from './media/gw.png';
import co2img from './media/co2.png';
import ch4img from './media/ch4.png';
import no2img from './media/no2.png';
import polarimg from './media/polar.png'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';



function Cards({cardtype}) {

  var title="";
  var desc="";
  var img='';
  var pag='';  



  switch (cardtype){
    case "Gw":
      title="Global Warming";
      desc="Shows a chart to check the risign global temperature since 1880.04";
      img=gwimg;
      pag='/global-warming'
    break

    case "co2":
      title="Carbon Dioxide";
      desc="Shows a chart to check the levels of Carbon Dioxide in the atmosphere since 800,000 years ago";
      img=co2img;
      pag='/co2'
    break
    
    case "ch4":
      title="Methane";
      desc="Shows a chart to check the levels of methane in the atmosphere since 800,000 years ago";
      img= ch4img;
      pag="/ch4"
      break;

    case "no2":
      title="Nitrous Oxide";
      desc="Shows a chart to check the levels of Nitrous Oxide in the atmosphere since 800,000 years ago";
      img=no2img;
      break;

    case "polar":
       title="Sea Ice Extent";
       desc="Shows a chart to check the levels of Sea Ice since 1970";
       img=polarimg;
       break;
      

      default:
        alert("error misisng card")
  }
  return (
    <Card className=' text-center mt-5'>
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Link to={pag}>
       <Button variant="primary">Lern More</Button>
       </Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;