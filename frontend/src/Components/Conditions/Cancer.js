import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import { Card, CardGroup, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Cancer() {
  const backgroundStyle = {
    backgroundImage: "url('https://images.saymedia-content.com/.image/t_share/MTkyOTkyMzE2OTQ3MjQ0MjUz/website-background-templates.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    
  };

  const cardStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headerStyle = {
    marginTop: '10px',
    fontFamily: 'Roboto, sans-serif',
    color: '#4a90e2',
    marginBottom: '10px',
  };
  

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px', 
  };
  

  const sectionStyle = {
    marginTop: '20px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const pStyle={
      fontFamily: 'Arial, sans-serif',
      fontSize: '20px',
      lineHeight: '1.5',
      color: '#333',
      marginBottom: '20px',
  }

  return (
  <Container style={backgroundStyle}>
    <div style={cardStyle}>
        <h1 style={headerStyle}>Understanding Cancer</h1>
        <img src="https://mehtahospital.com/blog/wp-content/uploads/2021/04/cancer-blog-image.jpg" alt="Cancer" style={imageStyle} /> 
        <p style={pStyle}>
          Cancer is a group of diseases characterized by the uncontrolled growth and division of abnormal cells. It can occur
          in various parts of the body and may lead to serious health complications.
        </p>
        <p style={pStyle}>
          There are many types of cancer, each with its own specific characteristics and treatment approaches. Early detection,
          proper diagnosis, and timely treatment play a critical role in improving outcomes for individuals diagnosed with cancer.
        </p>
        <section style={sectionStyle}>
          <h2 style={headerStyle}>Common Symptoms</h2>
          <p style={pStyle}>
            The symptoms of cancer can vary widely depending on the type and stage of the disease. Common signs include unexplained
            weight loss, fatigue, persistent pain, changes in the skin, and abnormal bleeding.
          </p>
        </section>
        <section style={sectionStyle}>
          <h2 style={headerStyle}>Risk Factors</h2>
          <p style={pStyle}>
            Certain factors can increase the risk of developing cancer, including genetics, exposure to carcinogens, unhealthy
            lifestyle choices, and family history. Understanding and managing these risk factors can contribute to cancer prevention.
          </p>
        </section>
        <section style={sectionStyle}>
          <h2 style={headerStyle}>Treatment and Prevention</h2>
          <p style={pStyle}>
            Cancer treatment options include surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies.
            Prevention strategies often involve adopting a healthy lifestyle, regular screenings, and avoiding known risk factors.
          </p>
        </section>

        <h3 style={{
          borderRadius: '12px 12px 0 0', // top-left, top-right, bottom-right, bottom-left
          backgroundColor: '#f0f0f0',     // Adding a background color 
          padding: '10px',
          margin: '10px 0',
        }}>
          Cancer Treatment
        </h3>

      <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="100%" src="https://www.clipartkey.com/mpngs/m/35-354400_chemo-cartoon-person-with-cancer.png" />
            <Card.Body>
              <Card.Title>Chemo & your Body</Card.Title>
              <Card.Text>
                Some side effects of chemotherapy can linger for months or years. Learn to spot the signs of chemo's long-term changes.
              </Card.Text>
              <Button variant="primary" href='https://my.clevelandclinic.org/health/treatments/16859-chemotherapy'>
                Read More
              </Button>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" height="100%" src="https://th.bing.com/th/id/OIP.piBtNMsJly_FG3fL4RNKDAHaFQ?pid=ImgDet&rs=1" />
          <Card.Body>
            <Card.Title>All About Precision Medicine</Card.Title>
            <Card.Text>
              As more doctors use presicion medicine,it could change your doctor visits.Find out how.
            </Card.Text>
            <Button variant="primary" href='https://www.fda.gov/medical-devices/in-vitro-diagnostics/precision-medicine#:~:text=Precision%20medicine%2C%20sometimes%20known%20as,genes%2C%20environments%2C%20and%20lifestyles.'>
              Read More
            </Button>
          </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" height="100%" src="https://th.bing.com/th/id/OIP.GuehkD_MLsl772wvy13iBQHaE8?pid=ImgDet&w=1200&h=800&rs=1" />
            <Card.Body>
              <Card.Title>Radiation Therapy Basics</Card.Title>
              <Card.Text>It's a common treatment that shrinks tumors and kills cancer cells,but how exactly does radiation work?</Card.Text>
              <Button variant="primary" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4920949/'>
                Read More
              </Button>        
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" height="100%" src="https://th.bing.com/th/id/OIP.9Xxz1fPgQyCsiMPojtb3UgHaE8?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title>What is CRISPR?</Card.Title>
              <Card.Text>Future of gene editing.<br></br>
                Learn why this technique is so exciting and how it is used.</Card.Text>
              <Button variant="primary" href='https://www.broadinstitute.org/what-broad/areas-focus/project-spotlight/questions-and-answers-about-crispr'>
                Read More
              </Button>
            </Card.Body>
          </Card> 
      </CardGroup>

      <h3 style={{
          borderRadius: '12px 12px 0 0', // top-left, top-right, bottom-right, bottom-left
          backgroundColor: '#f0f0f0',     
          padding: '10px',
          margin: '10px 0',
        }}>
          Latest News & Features
        </h3>

      <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Link href="https://neurosciencenews.com/depression-anxiety-cancer-23769/">
              Analysis: Depression, Anxiety Do Not Increase the Risk of Cancer
            </Card.Link> 
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Link href="https://www.militarytimes.com/news/your-military/2023/08/14/study-links-forever-chemicals-to-testicular-cancer-in-us-troops/">
              Study: ‘Forever Chemicals’ Linked to Testicular Cancer in Military
            </Card.Link> 
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Link href="https://www.hsph.harvard.edu/news/press-releases/outdoor-air-pollution-may-increase-non-lung-cancer-risk-in-older-adults/">
              Air Pollution May Raise Risk of Several Cancers, Study Finds
            </Card.Link> 
            </Card.Body>
          </Card> 
      </CardGroup>

      <h3 style={{
          borderRadius: '12px 12px 0 0', 
          backgroundColor: '#f0f0f0',     
          padding: '10px',
          margin: '10px 0',
        }}>
          Related Links
        </h3>
      <div style={{ display: 'flex' }}>
        <ListGroup variant="flush" style={{ width: '250rem' }}>
          <ListGroup.Item style={{ cursor: 'pointer' }}>
            <a href='https://www.cancer.gov/types/pancreatic/patient/pancreatic-treatment-pdq#:~:text=Pancreatic%20cancer%20is%20a%20disease,%2C%20pain%2C%20and%20weight%20loss.' style={{ textDecoration: 'none', outline: 'none',color:'black'}}>
              Pancreatic Cancer
            </a>
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Bladder Cancer</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Brain Cancer</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cervical Cancer</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Colorectal Cancer</ListGroup.Item>
        </ListGroup>
        
        <ListGroup variant="flush" style={{ width: '250rem' }}>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Leukemia</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Lymphoma</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Melanoma</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Multiple Myeloma</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Ovarian Cancer</ListGroup.Item>
          
        </ListGroup>

        <ListGroup variant="flush" style={{ width: '250rem' }}>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cancer News</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cancer Reference</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cancer Slideshows</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cancer Quizzes</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cancer Videos</ListGroup.Item>
        </ListGroup>

        <ListGroup variant="flush" style={{ width: '250rem' }}>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Find an Oncologist</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Cancer A-Z</ListGroup.Item>
          <ListGroup.Item style={{ cursor: 'pointer' }}>Book:Take acontrol of your cancer risk</ListGroup.Item>
        </ListGroup>
      </div>


    </div>
    </Container>
  );
}

export default Cancer;