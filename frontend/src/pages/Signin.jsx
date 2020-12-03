import React, { Component } from 'react';
import {Tabs, Nav, Content} from 'react-tiny-tabs';
import FeatureTabs from '../components/signin/FeatureTabs.jsx'
import Footer from '../components/Footer.jsx'

import {
  Person,
} from 'blockstack';



const settings = {
  index: 0,
  bgColor: '#222',
  color: '#9d9d9d'
};

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <div id="intro">
      <br /> <br />
      <div className="panel-landing" id="section-1" style={{marginTop: '8em'}}>
        <h1> </h1>
        <h1 className="landing-heading">Deep Reinforcement Learning in the Cloud.</h1>

        <p></p>
        <p className="lead">
          Outsource the heavy lifting of discrete event simulation and OpenAI gym learning to the cloud.<br /><br />
          <button
            className="btn btn-secondary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
      <section>
       <FeatureTabs />
      </section>
      <Footer />
      </div>
    );
  }
}