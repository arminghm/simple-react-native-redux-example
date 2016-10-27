import * as actionTypes from '../../actions/todo/actionTypes';
import { guid } from '../../utils';
const initialState = {
  todos: [
  ]
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {id: guid(), text: action.text}
        ]
      };
    case actionTypes.REMOVE_TODO:
      let todos = Array.from(state.todos);
      todos.map((todo) => {
        if (todo.id === action.id) {
          todos.splice(todos.indexOf(todo),1);
          return;
        }
      });
      return {
        ...state,
        todos
      };
    default:
      return state;
  }
}
