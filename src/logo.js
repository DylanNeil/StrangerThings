import React from 'react';
import data from "./en_US";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from './description.js';
import logo from './logo.png';

function Logo(){
return(
<section>
  <div id="home">
    <Container className="padder">
      <Row>
        <Col sm={4} className="description">
        </Col>
        <Col sm={4} className="logo">
           <img src={logo}></img>
        </Col>
        <Col sm={4} className="description">
        </Col>
      </Row>
    </Container>

      <br></br>
      <Row>
        <div className="hero">
        <Col sm={6} className="description">
          <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
        </Col>
        <Col sm={6} className="description">
        </Col>
      </div>
      </Row>
   </div>
 </section>
)}

export default Logo;
