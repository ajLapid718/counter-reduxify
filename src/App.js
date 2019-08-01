import React, { Component } from 'react';
import './App.css';

// Additional Redux store imports;
import { connect } from "react-redux";
import { increment, decrement } from "./store/utilities/counter";

class AppContainer extends Component {
  render() {
    return (
      <AppView counter={this.props.counter} incrementCounter={this.props.incrementCounter} decrementCounter={this.props.decrementCounter} />
    )
  }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
  return {
    counter: state.counter
  }
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement())
  }
}

export default connect(mapState, mapDispatch)(AppContainer);