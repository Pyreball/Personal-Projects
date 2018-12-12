/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * ? Login page is done but there is no server ask josh
 * TODO: ALLOW USER TO LOGIN AS INSTRUCTOR WITH SERVER
 * TODO: MONitor class attendance of multiple classes.
 * TODO: Main should hold a list of classes
 * TODO: users should be able to open classes with a touch
 * TODO: Once open a list of students names in the classes will apeaer using sectionList component
 * TODO: USER randomuser generator API to populate list
 * TODO: MAX SIZE OF 30 in the list
 * TODO: imilar to program 1 add a checkbox default = true (student are in class by default)
 * TODO: unchecked = noshow and noshow count is incremented
 * TODO: Add button next to students name to remove them
 * TODO: update student cound and no show after
 * TODO: have a add student screen
 * TODO: everstudent needs a uinique id
 * TODO: cant add duplicate students (duplicate is id1==id2)
 * TODO: add new class button and have a setting page to change class size 30 is teh default.

 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Auth from './Screens/AuthScreen';
import Main from './Screens/Main';
import StudentList from './Screens/StudentList';
import SettingScreen from './Screens/SettingScreen';
import {createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: {
        screen: Auth
    },
    Main: {
        screen: Main
    },
    StudentList: {
        screen: StudentList
    },
    SettingScreen: {
        screen: SettingScreen
    }
});

type Props = {};
export default class App extends Component < Props > {
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
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    settings: {
        color: '#ffffff'
    }
});
