import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';


export class studentDetail extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('name'),
    })
  render() {
    return (
      <View style={styles.container}>
                <Text> Phone Number: </Text>
                <Text>{this.props.navigation.getParam('number')} </Text>
            </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default studentDetail
