import React, { Component } from 'react';
import { connect } from 'react-redux';
// TODO: Remove the hot import from production build
import { hot } from 'react-hot-loader';

import { increase, decrease } from './app.reducer';

class App extends Component {
  render() {
    return (
      <div>
        <div>Counter: {this.props.counter}</div>
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.decrease}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increase() {
    dispatch(increase());
  },

  decrease() {
    dispatch(decrease());
  }
});

// TODO: Remove hot HOC from the production build by using process.env.NODE_ENV
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));