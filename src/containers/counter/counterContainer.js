import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/counter/actionCreators';
import CounterComponent from '../../components/counter/counterComponent';

const CounterContainer = (props) =>
  <CounterComponent {...props} />

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: ()=>{
      dispatch(actionCreators.increment());
    },
    decrement: ()=>{
      dispatch(actionCreators.decrement());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer)
