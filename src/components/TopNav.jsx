import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
       <div id="top-nav-container">
        <nav className="navbar navbar-inverse">
          <div class="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://codeamt.github.io">s i m s t r a t e g y</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default TopNav;