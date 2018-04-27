/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar, AppRegistry, TouchableHighlight } from "react-native";
const styles = require("../../style.js");
const constants = styles.constants

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class AddButton extends Component {
  render() {
    return (
      <View style={styles.action}>
      <TouchableHighlight
        underlayColor="#24ce84"
        onPress={this.props.onPress}
      >
      <Text style={styles.actionText}>{this.props.title}</Text>

      </TouchableHighlight>


      </View>
    );
  }
}

// AppRegistry.registerComponent("Toolbar", () => itemlister);
