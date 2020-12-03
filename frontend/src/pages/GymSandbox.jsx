import React, { Component } from 'react';
import SandboxTabs from '../components/sandbox/SandboxTabs.jsx'
import SandboxTerminal from '../components/sandbox/SandboxTerminal.jsx'
import {
  Person,
} from 'blockstack';


export default class GymSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observation_space: [],
      action_space: [],
    }
  }
  gymReset() {

  }
  gymStep() {

  }
  gymEpisode() {

  }
  gymDelete() {

  }
  monitorStart() {

  }
  monitorShutdown() {

  }
  actionSpaceContains() {

  }
  observationSpaceContains() {

  }
  generateReport() {

  }
  render() {
    return (
      <div style={{width: "100%", paddingLeft: "1em", paddingRight: "1em"}}>
      <br /><br />
      <SandboxTabs />
      <SandboxTerminal />
      </div>
    )
  }
}