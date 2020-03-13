import React, { useState, Fragment } from 'react';
import data from "./en_US";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const e = data["episode-list"];
export default function Episodes() {
  const [order, setOrder] = useState(true);
  const sortArray = e => {
    if(order === true){
      return e.slice().sort((a,b) => (a.rating < b.rating) ? 1 : -1);
    }
    if(order === false){
      return e.slice().sort((a,b) => (a.rating > b.rating) ? 1 : -1);
    }
  }
  return (
    <Fragment>
    <div>
      <Container className="toggleEpisodes borderBtm padder">
        <Row>
        <Col sm={9}>
         <h2 id="episodes">Episode List</h2><br></br>
         <h3>All episodes of Stranger Things organized by fan favorite</h3>
         <button className="stbtn" onClick={() => {setOrder(!order)}}>Filter By Rating</button><br/><br></br>
         <br></br>
        </Col>
        <Col sm={3}>
        </Col>
      {sortArray(e).map((episodes, index) => (
      <Col sm={6} md={3} >
        <div class="episodebox" key={episodes.name + index}>
        <h4>{episodes.name}</h4>
        <p>Rating: {episodes.rating}</p>
        <p className="small">Season {episodes.season}</p>
        </div>
        <br></br>
      </Col>
      ))}
      </Row>
    </Container>
    </div>

    </Fragment>
  )
}
