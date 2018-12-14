/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CardScreen from './Screens/CardScreen';
import LoginScreen from './Screens/LoginScreen';
import EditCardScreen from './Screens/EditCardScreen';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {fetchCards} from "./api";

const AppNavigator = createStackNavigator(
    {
        CardScreen: CardScreen,
        EditCardScreen: EditCardScreen
    },
    {
        initialRouteName: "CardScreen"
    }
);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount() {
        this.getCards();
    }

    getCards = async () => {
        const cards = await fetchCards();
        this.setState({cards: cards});
    }

    render() {
        const AppContainer = createAppContainer(AppNavigator);
        return (<AppContainer screenProps={{cards: this.state.cards}}/>);
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
