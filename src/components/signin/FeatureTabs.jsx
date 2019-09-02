import React, { Component } from 'react';
import { Table, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class FeatureTabs extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    }
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div id="features-tab-container" style={{width: '80%', height: '100%', margin: '0 auto'}}>
        <Nav tabs >
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Available Environments
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Open AI Gym Sandboxes
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Agent Policy Reports
            </NavLink>
          </NavItem>



        </Nav>

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                  <img className="img-left" src="https://s3.amazonaws.com/onename/avatar-placeholder.png" alt="pic" />
              </Col>
              <Col sm="4" style={{padding: '2em'}}>
                <p>Cardinals, in the family Cardinalidae, are passerine birds found in North and South America. They are also known as cardinal-grosbeaks and cardinal-buntings. The South American cardinals in the genus Paroaria are placed in another family, the Thraupidae (previously placed in Emberizidae).</p>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <img className="img-left" src="https://s3.amazonaws.com/onename/avatar-placeholder.png" alt="pic" />
              </Col>
              <Col sm="4" style={{padding: '2em'}}>
                <p>The tufted titmouse (Baeolophus bicolor) is a small songbird from North America, a species in the tit and chickadee family (Paridae). The black-crested titmouse, found from central and southern Texas southwards, was included as a subspecies but is now considered a separate species B. atricristatus.</p>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <img className="img-left" src="https://s3.amazonaws.com/onename/avatar-placeholder.png" alt="pic" />
              </Col>
              <Col sm="4" style={{padding: '2em'}}>
                <p>The bluebirds are a group of medium-sized, mostly insectivorous or omnivorous bird in the order of Passerines in the genus Sialia of the thrush family (Turdidae). Bluebirds are one of the few thrush genera in the Americas</p>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
      </div>
    )
  }
}

export default FeatureTabs;
