import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo/actionCreators';
import TodoListComponent from '../../components/todo/todoListComponent'


const TodoListContainer = (props) =>
  <TodoListComponent {...props} />

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos
  }
}

const matpDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

export default connect(mapStateToProps, matpDispatchToProps)(TodoListContainer);
