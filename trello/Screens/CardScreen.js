/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, ViewPagerAndroid} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Card = props => (
    <View style={styles.pageStyle}>
        <Text>{props.card.name}</Text>
    </View>
)

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cards = this.props.screenProps.cards.map((card, key) =>
            <Card card={card} key={key}/>
        );

        return (
            <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
                {cards}
            </ViewPagerAndroid>
        );
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
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});
