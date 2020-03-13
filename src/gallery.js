import React from 'react';
import data from "./en_US";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from './description.js';

const g = data.gallery;
const Image = g.map(sources => (sources.src));
const Caption = g.map(captions => (captions.text));

function Gallery(){
return(
<section>
  <div className="padder">
    <Container>
      <Row>
        <Col sm={6} md={4} className="description">
          <h2 id="gallery">Gallery: Scenes Inspired By Durham</h2><br></br>
         <p>{Description}</p>
         <p class="small">Hover over image to view in full.</p>
        </Col>
        <Col sm={6}  md={8} className="description">
          <Carousel className="item carousel">
            <Carousel.Item>
              <img
                className="w-100"
                src={Image[0]}
                />
              <Carousel.Caption className="carouselText">
                <p>{Caption[0]}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={Image[1]}
                />
              <Carousel.Caption className="carouselText">
                <p>{Caption[1]}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={Image[2]}
                />
              <Carousel.Caption className="carouselText">
                <p>{Caption[2]}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100"
                src={Image[3]}
                />
              <Carousel.Caption className="carouselText">
                <p>{Caption[3]}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
   </div>
 </section>
)}

export default Gallery;
