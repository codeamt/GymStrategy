import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu} from 'react-burger-menu';


class SideBar extends Component {
  render() {
    return (
      <Menu>
       <Link to="/">Home</Link>
       <Link to="/library">Library</Link>
       <Link to="/:blockstack_id/profile">Sandboxes</Link>
       <Link to="/:blockstack_id/profile">Profile</Link>
       <Link to="/:blockstack_id/profile">Sign Out</Link>
      </Menu>
    );
  }
};

export default SideBar;