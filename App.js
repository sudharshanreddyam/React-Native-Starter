/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { yellow, blue } from 'ansi-colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Sudha</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Teja</Text>
        <Text style={styles.defaultText}>Sudhansh</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultText : {
    fontSize: 22,
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 10,
    margin: 5
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
});
