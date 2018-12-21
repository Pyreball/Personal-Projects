import React, {Component} from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native'

export class Main extends Component {
    static navigationOptions = ({navigation}) => ({title: 'Class List', headerRight: <Button title='Settings' onPress ={() => navigation.navigate("SettingScreen")}/>})
    _Settings = () => {
        this
            .props
            .navigation
            .navigate('SettingScreen')
    }
    _NavigateClass = () => {
        this
            .props
            .navigation
            .navigate('StudentList')
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    THIS IS THE MAINPAGE!!!!!
                </Text>
                <TouchableOpacity style={styles.button} onPress={this._NavigateClass}>
                    <Text> Class 2430</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
    text: {
        color: '#ffffff'
    }
})

export default Main
