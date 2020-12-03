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
                <ul>
                <li> Classic Control </li>
                <li> Box2D </li>
                <li> Algorithmic </li>
                <li> Mujoco (Coming Soon) </li>
                <li> Multi-Agent (Coming Soon) </li>
                </ul>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <img className="img-left" src="https://s3.amazonaws.com/onename/avatar-placeholder.png" alt="pic" />
              </Col>
              <Col sm="4" style={{padding: '2em'}}>
                <ul>
                  <li> Space Search Terminal UI</li>
                  <li> Accelerated Runtime</li>
                  <li> Gym Monitor/Video Playback </li>
                  <li> In-app Script Editor</li>
                </ul>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <img className="img-left" src="https://s3.amazonaws.com/onename/avatar-placeholder.png" alt="pic" />
              </Col>
              <Col sm="4" style={{padding: '2em'}}>
                <ul>
                <li>Generate Training Reports</li>
                <li>Read from/Write to Gaia Storage </li>
                <li>Mobile Monitoring (Coming Soon)</li>
                </ul>
              </Col>
            </Row>
          </TabPane>
          </TabContent>
      </div>
    )
  }
}

export default FeatureTabs;
