import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry
} from 'react-native';

class App extends Component {
  render() {
    return(
      <View style = {{marginTop:20}} >
        <Text> Hello World! </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('SimpleReactNativeReduxExample', () => App);
