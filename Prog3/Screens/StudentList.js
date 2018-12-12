import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'

export class StudentList extends Component {
    static navigationOptions = ({navigation}) => ({title: 'Student List', headerRight: <Button title='Settings' onPress ={() => navigation.navigate("SettingScreen")}/>})
    _Settings = () => {
        this
            .props
            .navigation
            .navigate('SettingScreen')
    }
    _SettingsMenue = () => {
        this
            .props
            .navigation
            .navigate('SettingScreen')
    }
    render() {
        return (
            <View>
                <Text>
                    Student List Page
                </Text>
                <Button title="Settings" onPress={this._SettingsMenue}/>
            </View>
        )
    }
}

export default StudentList
