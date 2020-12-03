import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Table, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { Link } from 'react-router-dom';

import {
  Person,
} from 'blockstack';

let active = 1;
let items = [];
for (let number = 1; number <= 2; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gym_instances: [],
    }
  }
  render() {
    return (
     <div id="home">
      <section id="quick-links">
       <div style={{width: "100%"}}>
          <Row style={{width: "80%", margin: "0 auto", float: "left"}}>
          <Jumbotron fluid style={{backgroundColor: "#333"}}>
            <Container fluid>
              <Col sm="6" id="new-project">
            <Card body style={{backgroundColor: "black", height: "100%", padding:"2em"}}>
              <CardTitle><h1>Quick Start</h1></CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button><Link to="/library">View Gyms</Link></Button>
            </Card>
          </Col>
          <Col sm="6" id="new-project">
            <Card body style={{backgroundColor: "black", height: "100%", padding: "2em"}}>
              <CardTitle><h1>Custom</h1></CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>New File</Button>
            </Card>
          </Col>
            </Container>
          </Jumbotron>
          </Row>
       </div>
       </section>
       <section id="recent-gyms">
       <br />
       <br />
       <Badge color="dark" style={{float: "left", textAlign: "left", float: "left", marginBottom: "1em" }}><h5>s a n d b o x e s</h5></Badge><br /><br />
       <div>
        <Table dark>
        <thead>
          <tr>
            <th>Instance Id</th>
            <th>Environment</th>
            <th>Dashboard Link</th>
            <th>Created On:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">fgjhr72a</td>
            <td>MountainCar-v0</td>
            <td><Link style={{textDecoration: "underline"}} to="/envs/fgjhr72a/sandbox">view</Link></td>
            <td>8/26/2019</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <Pagination size="sm">{items}</Pagination>
      </section>
      </div>
    )
  }
}