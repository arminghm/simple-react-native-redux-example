import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { AddTodoStyle } from '../../styles/todo';

export default class AddTodoComponent extends Component {
  render() {
    let todoText = '';
    return(
      <View style={AddTodoStyle.container}>
        <TextInput
          ref={'todoText'}
          style={AddTodoStyle.textInput}
          placeholder='Todo...'
          onChangeText ={(text) => {todoText = text.trim();}}/>
        <TouchableHighlight
          style={AddTodoStyle.buttonAddTodo}
          onPress={() => {
              this.props.addTodo(todoText);
              this.refs['todoText'].setNativeProps({text:''})
              todoText = '';
            }
          }>
          <Text>Add todo</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
