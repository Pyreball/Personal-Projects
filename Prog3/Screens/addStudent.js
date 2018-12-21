import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';

export class addStudent extends Component {
    static navigationOptions = {
        headerTitle: 'Add Student'
    }

    state = {
        name: '',
        number: '',
        isValid: false
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.number !== prevState.number) 
            this._validate();
        }
    //are name and number valid
    _validate = () => {
        if (+this.state.number >= 0 && this.state.number.length == 10 && this.state.name.length > 1) 
            this.setState({isValid: true})
        else {
            this.setState({isValid: false})
        }
    }
    //update name state
    _nameChange = (name) => {
        this.setState({name: name})
    }
    //update number state
    _numberChange = (number) => {
       if (+number >= 0 && number.length <= 10) {
      this.setState({ number });
    }
    }
    //logic for submiting new student
    _submitStudent = () => {
        if (this.state.isValid) {
            let students = this.props.screenProps.students;
            this
                .props
                .screenProps
                .onSubmit({key: students.length, name: this.state.name, number: this.state.number});
            this
                .props
                .navigation
                .navigate('StudentList');
        } else {
            alert('Not Valid')
        }
    }
    render() {
        return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='name'
          value={this.state.name}
          onChangeText={this._nameChange}
        />
        <TextInput
          style={styles.input}
          value={this.state.number}
          keyboardType='numeric'
          maxLength={10}
          placeholder='phone number'
          onChangeText={this._numberChange}
        />
        <Button
          title='Add Student'
          onPress={this._submitStudent}
          disabled={!this.state.isValid}
        />
      </KeyboardAvoidingView>
    );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50
    },

    homeScreenButton: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    }
});

export default addStudent
