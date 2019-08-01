import React, { Component } from 'react';
import './App.css';

// Import view;
import AppView from "./AppView";

// Additional Redux store imports;
import { connect } from "react-redux";
import { increment, decrement } from "./store/utilities/counter";
import { fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  removeStudent = (id) => {
    this.props.removeStudent(id);
  }

  addStudent = (student) => {
    this.props.addStudent(student);
  }

  render() {
    return (
      <AppView counter={this.props.counter} incrementCounter={this.props.incrementCounter} decrementCounter={this.props.decrementCounter} handleChange={this.handleChange} amount={this.state.amount} students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} />
    )
  }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
  return {
    counter: state.counter,
    students: state.students
  }
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
  return {
    incrementCounter: (amount) => dispatch(increment(amount)),
    decrementCounter: (amount) => dispatch(decrement(amount)),
    fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: (id) => dispatch(removeStudentThunk(id)),
    addStudent: (student) => dispatch(addStudentThunk(student))
  }
}

export default connect(mapState, mapDispatch)(AppContainer);