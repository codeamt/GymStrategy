import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu} from 'react-burger-menu';


class SideBar extends Component {
  render() {
    return (
      <Menu>
       <Link to="/:blockstack_id/home">Home</Link>
       <Link to="/:blockstack_id/library">Library</Link>
       <Link to="/:blockstack_id/profile">Your Sandboxes</Link>
       <Link to="/:blockstack_id/profile">Your Profile</Link>
       <Link to="/:blockstack_id/profile">Sign Out</Link>
      </Menu>
    );
  }
};

export default SideBar;