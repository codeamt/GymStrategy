import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Table, Card, CardTitle, CardText, Row, Col , Button } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { Player } from 'video-react';
import classnames from 'classnames';

class SandboxTabs extends Component {
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
      <div id="home" style={{width: '95%', height: '100%', margin: "0 auto"}}>
        <Nav tabs style={{ marginTop: "4em"}}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              ENV Info
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Action Space
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Observation Space
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Virtual Playback
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Uploads
            </NavLink>
          </NavItem>

        </Nav>

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <Table dark size="sm">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Owner Id</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Environment Id</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Environment Name</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Environment Name</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Render Modes</th>
                      <td>Some Value</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm="4" style={{backgroundColor: '#fff',  marginLeft: '20%'}}>
                <VictoryChart height={275}>
                  <VictoryLine height={300} />
                </VictoryChart>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <Table dark size="sm">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Class</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Size</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Shape</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Low</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">High</th>
                      <td>Some Value</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm="6" style={{padding: '2em'}}>
                <Card body style={{marginTop: '3em', paddingLeft: '4em'}}>
                  <InputGroup className="mb-6" style={{display: 'inline'}}>
                    <FormControl
                      placeholder="Search Space for Specific Action..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      style={{display: 'inline', width: '55%', height: '47px'}}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" style={{display: 'inline', width: '40%', marginLeft: '-15%'}}>Search</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="3">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <Table dark size="sm">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Class</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Size</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Shape</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Low</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">High</th>
                      <td>Some Value</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm="6" style={{padding: '2em'}}>
                <Card body style={{marginTop: '3em', paddingLeft: '4em'}}>
                  <InputGroup className="mb-6" style={{display: 'inline'}}>
                    <FormControl
                      placeholder="Search Space for Specific Observation..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      style={{display: 'inline', width: '55%', height: '47px'}}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" style={{display: 'inline', width: '40%', marginLeft: '-15%'}}>Search</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="4">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <Table dark size="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Video File</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Class</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Size</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Shape</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Low</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">High</th>
                      <td>Some Value</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm="6" style={{marginTop: '-2%'}}>
                <Card body style={{paddingLeft: '4em'}}>
                  <Player style={{height: "200px"}}>
                    <source src="#" />
                  </Player>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="5">
            <Row style={{marginTop: '2em'}}>
              <Col sm="4">
                <Table dark size="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Video File</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Class</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Size</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Shape</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">Low</th>
                      <td>Some Value</td>
                    </tr>
                    <tr>
                      <th scope="row">High</th>
                      <td>Some Value</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm="6" style={{padding: '2em'}}>
                <Card body style={{marginTop: '3em', paddingLeft: '4em'}}>
                  <div style={{width: '45%', height: '250px', backgroundColor: '#fff', color: '#000', display: 'inline', marginLeft: '2%'}}>
                    //video
                    </div>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default SandboxTabs;

