import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Table, Card, CardTitle, CardText, Row, Col , Button } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { Player } from 'video-react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

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
              Observation Space
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Action Space
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
              Storage
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
                      <td>blockstack_user.id</td>
                    </tr>
                    <tr>
                      <th scope="row">Environment</th>
                      <td>MountainCar-v0</td>
                    </tr>
                    <tr>
                      <th scope="row">Category</th>
                      <td>Classic Control</td>
                    </tr>
                    <tr>
                      <th scope="row">Reward Unit</th>
                      <td>1/step</td>
                    </tr>
                    <tr>
                      <th scope="row">Episode Length</th>
                      <td>200 Steps</td>
                    </tr>
                     <tr>
                      <th scope="row">State Initialization</th>
                      <td>Random</td>
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
                      <td>Box</td>
                    </tr>
                    <tr>
                      <th scope="row">Size</th>
                      <td>4</td>
                    </tr>
                    <tr>
                      <th scope="row">Shape</th>
                      <td>(4,1)</td>
                    </tr>
                    <tr>
                      <th scope="row">Low</th>
                      <td>[-4.8, -Inf, -24 deg, -Inf]</td>
                    </tr>
                    <tr>
                      <th scope="row">High</th>
                      <td>[4.8, Inf, 24 deg, Inf]</td>
                    </tr>
                     <tr>
                      <th scope="row">State Initialization</th>
                      <td>Random</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col sm="6" style={{padding: '2em'}}>
                <Card body style={{marginTop: '3em', paddingLeft: '4em'}}>
                  <InputGroup className="mb-6" style={{display: 'inline'}}>
                    <FormControl
                      placeholder="Search Space for Specific Observation Property..."
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
                      <td>Discrete</td>
                    </tr>
                    <tr>
                      <th scope="row">Size</th>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">Shape</th>
                      <td>(2,1)</td>
                    </tr>
                    <tr>
                      <th scope="row">Actions</th>
                      <td>[Left, Right]</td>
                    </tr>
                    <tr>
                      <th scope="row">Keys</th>
                      <td>0 : Left, 1 : Right</td>
                    </tr>
                    <br/>
                    <br/>
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
                      <th scope="row">8/26/2019</th>
                      <td>fgjhr72a_run_01.mp4</td>
                    </tr>
                    <tr>
                      <th scope="row">8/26/2019</th>
                      <td>fgjhr72a_run_02.mp4</td>
                    </tr>
                    <tr>
                      <th scope="row">8/26/2019</th>
                      <td>fgjhr72a_run_03.mp4</td>
                    </tr>
                    <tr>
                      <th scope="row">8/28/2019</th>
                      <td>fgjhr72a_run_04.mp4</td>
                    </tr>
                    <tr>
                      <th scope="row">8/29/2019</th>
                      <td>fgjhr72a_run_05.mp4</td>
                    </tr>
                  </tbody>
                </Table>
                <br/>
                <br/>
              </Col>
              <Col sm="6" style={{marginTop: '1%'}}>
                <Card body style={{paddingLeft: '4em', marginLeft: "10em"}}>
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
                      <th scope="row">8/29/2019</th>
                      <td><Link to="/envs/fgjhr72a/sandbox">fgjhr72a_run01_report.pdf</Link></td>
                    </tr>
                    <tr>
                      <th scope="row">-</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">-</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">Low</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">High</th>
                      <td>-</td>
                    </tr>
                  </tbody>
                </Table>
                <br/>
                <br/>
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

