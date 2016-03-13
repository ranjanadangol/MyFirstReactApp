/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = require("./src/day-item");

var DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

class MyFirstReactApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Days of the Week
        </Text>

        {this.daysTest()}
      </View>
    );
  }
}

var daysTest = function() {
  return DAYS.map(function(day){
    return <DayItem day = {day}/>
  });
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyFirstReactApp', () => MyFirstReactApp);
