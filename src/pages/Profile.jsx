import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import Image from 'react-bootstrap/Image'


import {
  Person,
} from 'blockstack';


const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        },
      },
    };
  }
  render() {
    //const { handleSignOut, userSession } = this.props;
    //const { person } = this.state;
    return (
     // !userSession.isSignInPending() ?
     <div id="home" style={{width: "100%", height: "80vh"}}>
      <section id="quick-links" style={{width: "100%"}}>
        <Row style={{margin: "0 auto"}}>
         <Col sm="6" id="new-project" style={{margin: "0 auto"}}>
         <br/>
          <h2 style={{textAlign: "center"}}>Your Profile</h2>
          <br />
          <Card body>
              <Image src={avatarFallbackImage} roundedCircle /><br /><br/>
              <ListGroup>
                <ListGroupItem>Blockstack Id</ListGroupItem>
                <ListGroupItem>GitHub</ListGroupItem>
                <ListGroupItem>Logout</ListGroupItem>
              </ListGroup>
            </Card>
         </Col>
        </Row>
       </section>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
      </div>
    );
  }

  //componentWillMount() {
    //const { userSession } = this.props;
    //this.setState({
   //   person: new Person(userSession.loadUserData().profile),
   // });
   //person.avatarUrl() ? person.avatarUrl()
   //person.name() ? person.name() : '

   //onClick={ handleSignOut.bind(this) }
   //: null
  //}
}
