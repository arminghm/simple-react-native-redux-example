import { combineReducers } from 'redux';
import { counterReducer } from './counter/counterReducer';
import { todoReducer } from './todo/todoReducer';

export default combineReducers({
  counterReducer,
  todoReducer
})
