import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarOut extends Component {
    render() {
      return (
        <nav className="blue-grey lighten-1">
        <div className="nav-wrapper ">
          <ul id="nav-mobile" className="right hide-on-med-and-down #78909c ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </nav>
      );
    }
  }
  
  export default NavBarOut;