import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FeatureTabs from './components/signin/FeatureTabs.jsx'

import 'bootstrap-4-grid/css/grid.min.css';

import * as serviceWorker from './serviceWorker';

//components
import { Row, Col } from 'reactstrap';
import SideBar from './components/SideBar.jsx';
import TopNav from './components/TopNav.jsx';
import Footer from './components/Footer.jsx';
//Pages
import Signin from './pages/Signin.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import GymLibrary from './pages/GymLibrary.jsx';
import GymSandbox from './pages/GymSandbox.jsx';

import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig(["store_write"])
const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
        { !userSession.isUserSignedIn() ?
          <div style={{height: "100vh"}}>
          <div id="main">
          <TopNav />
          <SideBar />
          <GymSandbox userSession={userSession} handleSignIn={ this.handleSignIn } />
          <Footer />
          </div>
          <Footer />
          </div>
          :
          <div style={{height: "100vh"}}>
          <div id="main">
          <TopNav />
          <SideBar />
            <Switch>
             <Route exact path="/:blockstack_id/home" render={(props) => <Home {...props} userSession={userSession} handleSignOut={ this.handleSignOut } />}  />
             <Route exact path="/:blockstack_id/profile" render={(props) => <Profile {...props} userSession={userSession} handleSignOut={ this.handleSignOut } />}  />
             <Route exact path="/:blockstack_id/library" render={(props) => <GymLibrary {...props} userSession={userSession} handleSignOut={ this.handleSignOut } />}  />
             <Route exact path="/:blockstack_id/envs/:instance_id/sandbox" render={(props) => <GymSandbox {...props} userSession={userSession} handleSignOut={ this.handleSignOut } />}  />
            </Switch>
          </div>
          <Footer />
          </div>
        }
        </div>
      </div>
    )
  }
  componentWillMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
  }
}