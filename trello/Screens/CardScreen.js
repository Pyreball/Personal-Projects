/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
            'u'
});

export class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    _onEditPress = () => {
        navigate('EditCardScreen')
    }

    render() {
        return (
            <View style={styles.cardStyle} key={this.props.key}>
                <Text style={styles.cardName}>{this.props.card.name}</Text>
                <Text>{this.props.key}</Text>
                <TouchableOpacity style={styles.cardButton} onPress={this._onEditPress}>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cards = this
            .props
            .screenProps
            .cards
            .map((card, key) => <Card card={card} key={key}/>);

        return (
            <View style={styles.container}>
                <ScrollView style={styles.viewPager} horizontal={true}>
                    {cards}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f3f3f3'
    },
    viewPager: {
        flex: 1
    },
    cardStyle: {
        height: "95%",
        alignItems: 'center',
        width: "100%",
        padding: 20,
        flex: 1,
        backgroundColor: "#ffffff",
        margin: 12
    },
    cardName: {
        fontSize: 36,
        textAlign: 'center'
    },
    cardButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
});
