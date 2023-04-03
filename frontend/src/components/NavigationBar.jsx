import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { MyContext } from '../App';

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
  const linkStyle = {
    fontSize: '16px',
    color: 'white',
    display: 'block',
    textDecoration: 'none'
  };

  const linkStyle2 = {
    fontSize: '30px',
    color: 'white',
    display: 'block',
    textDecoration: 'none'
  };

  const linkStyle3 = {
    fontSize: '16px',
    marginLeft:'850px',
    color: 'white',
    display: 'block',
    textDecoration: 'none'
  };

  const username = useContext(MyContext);

  return (
    isLoggedIn === false ?
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: '30px', marginLeft: '10px' }}>On-demand Services</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link style={linkStyle} to="/">Home</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><Link style={linkStyle} to="/login">Log in</Link></Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="/register" style={linkStyle}>Sign up</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><h6 style={linkStyle2}>{username}</h6></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <h6 style={linkStyle3} onClick={() => { handleLogout() }}>Log out</h6>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;