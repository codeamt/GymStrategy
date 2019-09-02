import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Table, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';

import {
  Person,
} from 'blockstack';


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
          <Jumbotron fluid style={{backgroundColor: "black"}}>
            <Container fluid>
              <Col sm="6" id="new-project">
            <Card body>
              <CardTitle><h1>Quick Start</h1></CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>View Gyms</Button>
            </Card>
          </Col>
          <Col sm="6" id="new-project">
            <Card body>
              <CardTitle><h1>Custom Env</h1></CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Coming Soon</Button>
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
            <th>Gym Id</th>
            <th>Dashboard Link</th>
            <th>Created On:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </section>
      </div>
    )
  }
}