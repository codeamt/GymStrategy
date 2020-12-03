import React, { Component } from 'react';
import { Col, Button, ButtonGroup } from 'reactstrap';
import Terminal from 'terminal-in-react';

class SandboxTerminal extends Component {
  constructor(props) {
    super(props);

  }
  showMsg() {
   return 'Hello World'
  }
  render() {
    return (
      <div id="terminal-container">
        <Col style={{width: '100%'}}>
          <ButtonGroup>
            <Button>Reset</Button>
            <Button>Sample</Button>
            <Button>Step</Button>
            <Button>Run</Button>
            <Button>Pause</Button>
            <Button>Delete</Button>
          </ButtonGroup>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "left",
              alignItems: "left",
              height: "200px",
              width: "100%",
               marginBottom: "0px",
            }}
          >
          <Terminal
            color='green'
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1.25em", width: "100%", marginBottom: '0px', display: 'inline' }}
            commands={{
              'open-google': () => window.open('https://www.google.com/', '_blank'),
              showmsg: this.showMsg,
              popup: () => alert('Terminal in React')
            }}
            descriptions={{
              'open-google': 'opens google.com',
              showmsg: 'shows a message',
              alert: 'alert', popup: 'alert'
              }}
              msg='Top Reward Score: 195 over 100 episodes.'
            />
          </div>
        </Col>
      </div>
    )
  }
}

export default SandboxTerminal;