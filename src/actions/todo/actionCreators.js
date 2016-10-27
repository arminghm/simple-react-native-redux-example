import * as actionTypes from './actionTypes';

export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    text
  }
}
export const removeTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    id
  }
}
