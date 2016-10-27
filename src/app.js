import React from 'react';
import CounterContainer from './containers/counter/counterContainer';
import AddTodoContainer from './containers/todo/addTodoContainer';
import TodoListContainer from './containers/todo/todoListContainer';
import {
  View
} from 'react-native';
import { AppComponentStyle } from './styles';

export default App = () =>
  <View style={AppComponentStyle.appMaincontainer}>
    <CounterContainer />
    <AddTodoContainer />
    <TodoListContainer />
  </View>
