import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import CounterComponentStyle from '../../styles/counter';

export default CounterComponent = (props) =>
  <View style={CounterComponentStyle.container}>
    <View style={CounterComponentStyle.buttonContainer}>
      <TouchableHighlight
        onPress={()=>{props.increment()}} >
        <Text> Increment </Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={()=>{props.decrement()}} >
        <Text> Decrement </Text>
      </TouchableHighlight>
    </View>

    <View style={CounterComponentStyle.countTextContainer} >
      <Text> {props.count} </Text>
    </View>
  </View>
