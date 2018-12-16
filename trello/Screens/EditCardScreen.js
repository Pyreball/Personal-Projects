import React from 'react'
import {Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {Header} from 'react-navigation';
import { saveCard } from "../api";

export class EditCardScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Card Details',
        };
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const cardName = navigation.getParam('cardName', 'No Name'); /// getParam( name of param, fallback if doesn't exist)
        const cardPoints = navigation.getParam('cardPoints', 'Points not assigned');
        const cardDescription = navigation.getParam('cardDesc', 'No description');
        const cardID = navigation.getParam('cardID', 'No ID');

        this.state = {
            name: cardName,
            points: cardPoints,
            desc: cardDescription,
            id: cardID
        }
    }

    saveCard = () => {
        saveCard(this.state.id, this.state.name, this.state.points, this.state.desc, this.props.screenProps.refreshCards);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset = {Header.HEIGHT + 20} behavior = "padding" enabled>
                <View style={styles.inputArea}>
                    <Text>Card Name: </Text>
                    <TextInput style={styles.inputTextSmall} value={this.state.name} onChangeText={(name) => this.setState({name})}/>
                </View>
                <View style={styles.inputArea}>
                    <Text>Card Points: </Text>
                    <TextInput style={styles.inputTextSmall} keyboardType='numeric' value={this.state.points} onChangeText={(points) => this.setState({points})}/>
                </View>
                <View style={[styles.inputArea, {height: 110} ]} >
                    <Text>Card Description: </Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.inputTextLarge} value={this.state.desc} onChangeText={(desc) => this.setState({desc})}/>
                </View>
                <TouchableOpacity onPress={this.saveCard}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f3f3f3'
    },
    inputArea: {
        width: "90%",
        height: 90,
        margin: 8,
        backgroundColor: "#ffffff",
        padding: 8,
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 3
    },
    inputTextSmall: {
        height: 40,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 6
    },
    inputTextLarge: {
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 6,
        paddingRight: 6,
        justifyContent: "flex-start",
        textAlignVertical: 'top'
    }
});

export default EditCardScreen
