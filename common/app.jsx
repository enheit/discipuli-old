import React, { Component } from 'react';
import { connect } from 'react-redux';
// TODO: Remove the hot import from production build
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

// TODO: Remove hot HOC from the production build by using process.env.NODE_ENV
export default hot(module)(App);