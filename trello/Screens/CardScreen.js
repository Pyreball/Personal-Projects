/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            json: this.props.card.desc,
            points: '',
            description: ''
        }
    }

    componentWillMount() {
        if(this.state.json === '' || this.state.json === undefined) {
            let temp = {
                points: 'Points not set',
                description: 'No Description'
            }
            this.setState({
                json: temp,
                points: temp.points,
                description: temp.description
            })
        } else {
            let temp = JSON.parse(this.state.json);
            this.setState({
                points: temp.points,
                description: temp.description,
            })
        }
    }

    render() {

        return (
            <View style={styles.cardStyle}>
                <Text style={styles.cardName}>{this.props.card.name}</Text>
                <Text style={styles.cardPoints}>{this.state.points}</Text>
                <Text style={styles.cardDesc}>{this.state.description}</Text>
                <TouchableOpacity style={styles.cardButton} onPress={() => this.props.navigation.navigate("EditCardScreen", {
                    cardName: this.props.card.name,
                    cardPoints: this.state.points,
                    cardDesc: this.state.description,
                    cardID: this.props.card.id,
                })}>
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
        const cards = this.props.screenProps.cards.map((card, index) => <Card card={card} key={index} navigation={this.props.navigation}/>);

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
        flexGrow: 1
    },
    cardStyle: {
        height: "95%",
        alignItems: 'center',
        width: "100%",
        padding: 20,
        flex: 1,
        backgroundColor: "#ffffff",
        margin: 12,
        minWidth: Dimensions.get('window').width - 20
    },
    cardName: {
        fontSize: 40,
        textAlign: 'center'
    },
    cardButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    cardPoints: {
        fontSize: 24,
        fontWeight: '300',
        margin: 16
    },
    cardDesc: {
        fontSize: 18,
        margin: 24,
    }
});
