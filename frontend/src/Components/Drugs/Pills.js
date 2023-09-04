import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, CardGroup, Container } from 'react-bootstrap';
// import { FaSearch } from 'react-icons/fa'; 
import { Form, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

function Pills() {
    const backgroundStyle = {
        backgroundImage: "url('')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
      };
      const cardStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '10px',
        backgroundColor: '#ADBCE6',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        marginTop:'10px',
      };
      const ListStyle = {
        padding: '10px',
        backgroundColor: '#E6E6FA',
        textAlign: 'center',
        cursor: 'pointer',
        bottomMargin: '10px', display: 'flex' ,
      };
    

  return (
    <div >
      <div
          style={{
            backgroundImage: "url('https://images.saymedia-content.com/.image/t_share/MTkyOTkyMzE2OTQ3MjQ0MjUz/website-background-templates.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            textAlign: 'center',
            padding: '100px 0',
          }}
          >
            <h1 style={{
              color: '#00157c',
              fontFamily: 'Source Sans Pro, Verdana, sans-serif',
              fontSize: '3.3125rem',
              fontWeight: 700,
            }}>
              DRUGS & MEDICATIONS A-Z
            </h1>
            <h3>Trusted source for prescription drugs and medications. </h3>
        </div>
        <Card style={cardStyle}>
          <Card.Body>
            {/* <Card.Title>Search Box with Dropdown</Card.Title> */}
            <Form>
              <InputGroup>
                <Form.Control type="text" placeholder="Enter the Drug name to search" />
                <DropdownButton variant="outline-secondary" title="Filter">
                  <Dropdown.Item>Action 1</Dropdown.Item>
                  <Dropdown.Item>Action 2</Dropdown.Item>
                  <Dropdown.Item>Action 3</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
        <div style={cardStyle}>
        <div style={{ display: 'flex' }}>
            <ListGroup variant="flush" style={{ width: '200px' }}>
              <ListGroup.Item style={ListStyle}>Bladder Cancer</ListGroup.Item>
              <ListGroup.Item style={ListStyle}>Brain Cancer</ListGroup.Item>
              <ListGroup.Item style={ListStyle}>Cervical Cancer</ListGroup.Item>
              <ListGroup.Item style={ListStyle}>Colorectal Cancer</ListGroup.Item>
            </ListGroup>

        <ListGroup variant="flush" style={{ width: '200px' }}>
          <ListGroup.Item style={ListStyle}>Bladder Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Brain Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Cervical Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Colorectal Cancer</ListGroup.Item>
        </ListGroup>

        <ListGroup variant="flush" style={{ width: '200px' }}>
          <ListGroup.Item style={ListStyle}>Bladder Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Brain Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Cervical Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Colorectal Cancer</ListGroup.Item>
        </ListGroup>

        <ListGroup variant="flush" style={{ width: '200px' }}>
          <ListGroup.Item style={ListStyle}>Bladder Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Brain Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Cervical Cancer</ListGroup.Item>
          <ListGroup.Item style={ListStyle}>Colorectal Cancer</ListGroup.Item>
        </ListGroup>
        </div>
     </div>
    </div>
  )
}

export default Pills