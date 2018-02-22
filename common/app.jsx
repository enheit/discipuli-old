import React, { Component } from 'react';
import { connect } from 'react-redux';
// TODO: Remove the hot import from production build
import { hot } from 'react-hot-loader';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../client/relay-environment';
import { actionCreators } from './app.reducer';

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query appQuery {
            user: userByRowId(rowId: 1) {
              login
              password
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if(error) {
            return <div>Error occures</div>;
          }

          if(!props) {
            return <div>Loading...</div>;
          }

          return (
            <div>
              Login: {props.user.login}, password: {props.user.password}
            </div>
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increase() {
    dispatch(actionCreators.increase());
  },

  decrease() {
    dispatch(actionCreators.decrease());
  },

  reset() {
    dispatch(actionCreators.reset());
  },
});

// TODO: Remove hot HOC from the production build by using process.env.NODE_ENV
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));