import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todo/actionCreators';
import AddTodoComponent from '../../components/todo/addTodoComponent'

const AddTodoContainer = (props) =>
  <AddTodoComponent {...props}/>

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : (text) => {
      if (text !== '') {
        dispatch(addTodo(text));
      }
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodoContainer);
