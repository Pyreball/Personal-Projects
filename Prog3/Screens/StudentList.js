import React, {Component} from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'
import SectionListStudents from './SectionListStudents'

export class StudentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: this.props.screenProps.students,
            length: this.props.screenProps.students.length,
            goneStuents: 0,
        }
    }
    _setStudentLength = () => {
        return this.props.screenProps.students.length;
    }
   
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
    _updateStdCount = (present) => {
        if(!present)
        {
            this.setState({
                length: ++this.state.length,
                goneStuents: --this.state.goneStuents
            })
        }else{
            this.setState({
                length: --this.state.length,
                goneStuents: ++this.state.goneStuents
            })
        }
    }
    _SettingsMenue = () => {
        this
            .props
            .navigation
            .navigate('SettingScreen')
    }
    _showStudent = (student) => {
        this.props.navigation.navigate('studentDetail',
      {
        name: student.name,
        number: student.number
      });
    }
    render() {
        
        return (
            <View style={styles.container}>
                <Text>Number of Students: {this.state.length}</Text>
                <Text>Number of Students Gone: {this.state.goneStuents}</Text>
                <SectionListStudents
                    onRemove = {this.props.screenProps.onRemove}
                    onSelectStudent={this._showStudent}
                    onValueChange={this._updateStdCount}
                    students={this.props.screenProps.students}/>
                <Button title="Settings" onPress={this._SettingsMenue}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default StudentList
