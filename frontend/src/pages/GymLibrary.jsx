import React, { Component } from 'react';
import GymGrid from '../components/library/GymGrid.jsx';
import {
  Person,
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class GymLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        }
      }
    }
  }
  forkEnv() {

  }
  render() {
    return (
      <div style={{padding: "3em"}}>
        <br/>
        <h2 style={{textAlign: "center"}}>Gym Library</h2>
        <br />
        <GymGrid style={{width: "95%", margin: "2em auto", marginLeft: "2em"}}/>
      </div>
    )
  }
}
