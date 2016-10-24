import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Styles from '../../styles/counter/styles';

export default CounterComponent = (props) =>
  <View style={Styles.container}>
    <View style={Styles.buttonContainer}>
      <TouchableHighlight
        onPress={()=>{props.increment()}} >
        <Text> Increment </Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={()=>{props.decrement()}} >
        <Text> Decrement </Text>
      </TouchableHighlight>
    </View>

    <View style={Styles.countTextContainer} >
      <Text> {props.count} </Text>
    </View>
  </View>
