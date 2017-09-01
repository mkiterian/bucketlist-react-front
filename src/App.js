import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Bucketlists from './components/Bucketlists'


class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    }
  }

  addBucketlist(bucketlist) {
    var timestamp = (new Date()).getTime();
    this.state.bucketlists['bckt-' + timestamp] = bucketlist;
    this.setState({ bucketlists: this.state.bucketlists });
  }

  render() {
    const MyBucketlists = (props) => {
      return (
        <Bucketlists
          addBucketlist={this.addBucketlist}
          {...props}
        />
      );
    }
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/bucketlists" addBucketlist={this.addBucketlist} component={MyBucketlists} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
