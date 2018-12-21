import React, { Component } from 'react'
import { Text, View, TextInput,Button } from 'react-native'

export class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxClassSize: this.props.screenProps.classSizeMax
    }
  }
  _handleChange = (maxClassSize) => {
    this.setState({maxClassSize})
  }
  _handleUpdate = () => {
    this.props.screenProps.onClassUpdate(this.state.maxClassSize)
  }
  render() {
    return (
      <View>
        <TextInput 
          placeholder={`Class size is - ${this.state.maxClassSize}`}
          keyboardType='numeric'
          value={this.state.maxClassSize.toString()}
          onChangeText={this._handleChange}
        />
        <Button 
          title=" update"
          onPress={this._handleUpdate}
        />
      </View>
    )
  }
}

export default SettingScreen
