import React, { Component } from 'react';
import {Tabs, Nav, Content} from 'react-tiny-tabs';
import FeatureTabs from '../components/signin/FeatureTabs.jsx'

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
      <div id="intro"  style={{marginTop: '3em !important'}}>
      <div className="panel-landing" id="section-1" style={{top: '3em'}}>
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
      <section className="footer">
      <div>
        <div className="row">
          <div className="col-sm-4">© 2019 AnnMargaret Tutu</div>
          <div className="col-sm-8"><a href="#"><span>GitHub</span></a> | <a href="#"><span>Docs</span></a></div>
        </div>
      </div>
      </section>
      </div>
    );
  }
}