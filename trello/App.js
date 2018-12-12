/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CardScreen from './Screens/CardScreen';
import LoginScreen from './Screens/LoginScreen';
import EditCardScreen from './Screens/EditCardScreen';
import {createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: {
        screen: LoginScreen
    },
    CardScreen: {
        screen: CardScreen
    },
    EditCardScreen: {
        screen: EditCardScreen
    }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const AppContainer = createAppContainer(AppNavigator);
    return (<AppContainer/>);
  }
}

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
