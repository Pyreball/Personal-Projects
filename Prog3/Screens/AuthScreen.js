import React from "react";
import {
    Button,
    View,
    StyleSheet,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
} from "react-native";

export default class Auth extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    //Used to check if the user already logged in.
    componentDidMount() {
        this
            ._initialState()
            .done();
    }
    _initialState = async() => {
        var loginStatus = await AsyncStorage.getItem('username');
        if (loginStatus !== null) {
            this
                .props
                .naviagtion
                .navigate("Main");
        }

    }
    //Login Function must be done
    
    _Login = () => {

        alert(this.state.username)
        if(this.state.username == 'username' && this.state.password =='password'){
            this.props.navigation.navigate('Main')
        }
        /* fetch('http://192.168.2.2:6666', {
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })

        })

        .then((response) => response.json())
        .then((res) => {
            if (res.success === true){
                AsyncStorage.setItem('user', res.user);
                this.props.naviagtion.navigate('Main');
            }
            else{
                alert(res.message);
            }
        })
        .done(); */
        
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>You are currently not Logged In.</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Username'
                        onChangeText={(username) => this.setState({username})}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        onChangeText={(password) => this.setState({password})}/>

                    <Button title="Press to Log In" onPress={this._Login}/>
                </View>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    }
});
