import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function Headers() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary navbar-nav nav-fill w-100 justify-content-between mx-auto" bg="primary" data-bs-theme="dark">
      <Container>
       <Link to="/" className="navbar-brand">Health-Care</Link>
        {/* <Navbar.Brand href="#home">Health-Care</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        <ul className="navbar-nav me-auto" >
          <li className="nav-item">
              <Link to="/" className="nav-link ">Home</Link>
          </li>
          <li className="nav-item mx-3">
              <Link to="/get" className="nav-link">Find</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/task" className="nav-link">Tasks</Link>
          </li>
          <li className="nav-item mx-3">
              <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item mx-3">
              <Link to="/add" className="nav-link">Patient Admit</Link>
          </li> 
          <li className="nav-item ">
            <NavDropdown title="Conditions" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="/migraine">Migraine</NavDropdown.Item>
              <NavDropdown.Item href="/allergy">Allergies </NavDropdown.Item>
              <NavDropdown.Item href="/fever">Fever</NavDropdown.Item>
              <NavDropdown.Item href="/hiv">HIV/AIDS</NavDropdown.Item>
              <NavDropdown.Item href="/cancer">Cancer </NavDropdown.Item>
            </NavDropdown>
          </li>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Diabetes
              </NavDropdown.Item> */}
          <li className="nav-item">
            <NavDropdown title="Drugs & Supplements" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="/pills">Drugs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Supplements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pill Identifier</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Interaction Checker</NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="nav-item">
            <NavDropdown title="Well-being" id="basic-nav-dropdown" className="mx-3">
              <NavDropdown.Item href="teenhealth">Teen Health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Children's health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diet & Weight Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pregnancy</NavDropdown.Item>
            </NavDropdown>
          </li>
                {/* <Nav.Link href="#findadoctor" className="mx-3">Find a Doctor</Nav.Link>
            <Nav.Link href="#task" className="mx-3">Tasks</Nav.Link> */}

             <li>
              {
                  isAuthenticated? <LogoutButton/> : <LoginButton/>
              }
             </li>
        </ul>
           
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;