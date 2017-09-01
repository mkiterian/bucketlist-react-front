import React, { Component } from 'react';
import NavBarOut from './NavBarOut';


class Home extends Component {
    render() {
      return (
       
        <div className="Home">
        <NavBarOut /> 
          <h3 className="center-align">Welcome to the bucketlist app</h3>
        </div>
      );
    }
  }
  
  export default Home;