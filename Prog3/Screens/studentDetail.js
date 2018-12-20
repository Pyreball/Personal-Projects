import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class studentDetail extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('name'),
    })

    _RndStudent = () => {
        let studentList = this.props.screenProps.studentListlet id = rand()
    }



  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default studentDetail
