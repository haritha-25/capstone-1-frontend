import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from 'react';





    const Header = () => 
        {
            const [showQ,setShowQ]=useState(false)
            const [showC,setShowC]=useState(false)
        
            const showTip=(value)=>
            {
                console.log("in",showQ)
                if(value === "q") setShowQ(true)
                else setShowC(true)
            }
            const hideTip=(value)=>{
                if(value === "q") setShowQ(false)
                else setShowC(false)
            }
      return (
        <Navbar collapseOnSelect expand="lg" bg="light">
           
          <Container>
          <Navbar.Brand href="#home">
            <img
              src=" "
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Brand href="#home">Everything AWS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Data</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Chart">Insights</Nav.Link>
      </Nav.Item>
      
    </Nav>
                
        
             </Nav>
             <Nav>
    
            <Nav.Link href="https://app.polymersearch.com/auth/register"><Button variant="dark">Try polymer</Button>{' '}
            </Nav.Link>
          </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
    }
    export default Header