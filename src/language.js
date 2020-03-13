import React, { useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import english from './en_US.json';
import pigLatin from './la_PG.json';

const eng = {};
const pig = {};
const change = {};
const l = (true);

const data = {
  eng: {english},
  pig: {pigLatin}
}

export default function Languages() {
  const [i, j] = useState(true);
  const changeLanguage = change => {
    if(l === true){
      change = data.pig;
    }
    if(l === false){
      change = data.eng;
    }
  }

  return (
    <Fragment>
    <div>
      <Container className="toggleEpisodes borderBtm padder">
        <Row>
        <Col sm={9}>
         <button className="stbtn" onClick={() => {j(!i)}}>Change Language</button><br/><br></br>
         <br></br>
        </Col>
        <Col sm={3}>
        </Col>

      </Row>
    </Container>
    </div>

    </Fragment>
  )
}
  console.log(change);
