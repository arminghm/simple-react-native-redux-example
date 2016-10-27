import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { TodoStyle } from '../../styles/todo';

export default TodoItemComponent = (props) =>
  <View style={TodoStyle.container}>
    <Text style={TodoStyle.todoText}>{props.todo.text}</Text>
    <TouchableHighlight
      style={TodoStyle.buttonRemoveTodo}
      onPress={()=>{props.removeTodo(props.todo.id)}}>
      <Image source={require('../../images/delete.png')} style={{width:20,height:20}}/>
    </TouchableHighlight>
  </View>
