import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your stylesheet for styling
import Cards from './Card';

const Home = () => {
  return (
    <div>
         <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" 
                        src="https://www.international-patients.com/wp-content/themes/patients/assets/images/slider5.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Welcome to Our Healthcare Services</h3>
                        <p>Providing quality healthcare for all.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:500}}
                        src="https://images.ctfassets.net/pdf29us7flmy/3n7uoyaRCDXNeHmN6YUydv/72bc696d0b981027834a5d7e32644020/B8095-The-Ultimate-Guide-to-Medical-Field-Jobs-D2-Social.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Expert Doctors</h3>
                        <p>Skilled and experienced medical professionals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:500}}
                        src="https://www.hfmmagazine.com/ext/resources/images/2017/HFM-magazine/June/0617_intSus_LAP0164_0530_CMYK.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Modern Facilities</h3>
                        <p>State-of-the-art facilities for patient care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="company-section text-center mt-5">
                <h2>OUR MISSION</h2>
                <p> Delivering quality healthcare to every doorstep..</p>
            </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Carousel className="service-carousel">
          <Carousel.Item>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.3uA-p233wNQt0GnCRPY2fAAAAA&pid=Api&P=0&h=220" />
                  <Card.Body>
                    <Card.Title>Cardiology</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="https://ranjithospital.in/images/specilities/ortho.jpg" />
                  <Card.Body>
                    <Card.Title>Orthopedics</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.bDulLpCnhrxZiaMTN1mPAQHaE6?pid=ImgDet&rs=1" />
                  <Card.Body>
                    <Card.Title>Pediatrics</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          {/* Add more Carousel items for additional services */}
        </Carousel>
      </div>
      <Cards></Cards>
    
    </div>
  );
};

export default Home;
