import React from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'

export class EditCardScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Card Details',
        };
    };

    constructor(props) {
        super(props);
        const {navigation} = this.props;
        const cardName = navigation.getParam('cardName', 'No Name'); /// getParam( name of param, fallback if doesn't exist)
        const cardPoints = navigation.getParam('cardPoints', 'Points not assigned');
        const cardDescription = navigation.getParam('cardDesc', 'No description');

        this.state = {
            name: cardName,
            points: cardPoints,
            desc: cardDescription
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputArea}>
                    <Text>Card Name: </Text>
                    <TextInput style={styles.inputTextSmall} value={this.state.name}/>
                </View>
                <View style={styles.inputArea}>
                    <Text>Card Points: </Text>
                    <TextInput style={styles.inputTextSmall} keyboardType='numeric' value={this.state.points}/>
                </View>
                <View style={[styles.inputArea, {height: 110} ]} >
                    <Text>Card Description: </Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.inputTextLarge} value={this.state.desc}/>
                </View>
            </View>
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
