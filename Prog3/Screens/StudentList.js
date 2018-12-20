import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import SectionListStudents from './SectionListStudents'

export class StudentList extends Component {
    static navigationOptions = ({navigation}) => (
        {title: 'Student List', 
        headerRight: <Button title='Add Student' onPress ={() => navigation.navigate('addStudent')}/>
        })
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
              
                <Button title="Settings" onPress={this._SettingsMenue}/>
            </View>
        )
    }
}

export default StudentList
