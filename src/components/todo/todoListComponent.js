import React, { Component } from 'react';
import TodoItemComponent from './todoItemComponent'
import {
  View,
  ListView,
  Text
} from 'react-native';
import { TodoListStyle } from '../../styles/todo';


export default class TodoListComponent extends Component {
  render() {
    const {todos, removeTodo} = this.props
    if (todos.length == 0) {
      return(
        <View style={TodoListStyle.emptyView}>
          <Text>Empty List!</Text>
        </View>
      )
    }else {
      let dataSource = new ListView.DataSource({
        rowHasChanged: (r1,r2) => r1 !== r2
      });
      return(
        <ListView
          style={TodoListStyle.listView}
          keyboardShouldPersistTaps={true}
          dataSource={dataSource.cloneWithRows(todos)}
          renderRow={
            (todo)=> <TodoItemComponent todo={todo} removeTodo={removeTodo} />
          } />
      )
    }
  }
}
