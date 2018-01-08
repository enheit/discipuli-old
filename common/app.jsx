import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increaseClicks } from './app.actions';

class App extends Component {
  render() {
    return (
      <div>
        <p>Clicker counter: {this.props.clickNumbers}</p>
        <button onClick={this.props.increaseClicks}>Increase</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clickNumbers: state.clickNumbers
});

const mapDispatchToProps = dispatch => ({
  increaseClicks() {
    dispatch(increaseClicks())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);