import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, Switch, Button } from 'react-native';
import PropTypes from "prop-types"

export class Row extends Component {
  constructor(props) {
    super(props);
    this.state ={
      present: true,
    }
  }
  
  render() {
    return (
      <TouchableOpacity
    style={styles.row}
    onPress={() => this.props.onSelectStudent(this.props)}
  >
    <Switch value={this.state.present} onValueChange={() => {
      this.setState({
        present: !this.state.present
      })
      this.props.onValueChange(this.state.present)
    }}/>
    <Button title="Remove" onPress={ () => this.props.onRemove(this.props.number)}/>
    <Text style={{ fontSize: 20 }}>{this.props.name}</Text>
    <Text style={{ fontSize: 20 }}>{this.props.number}</Text>
  </TouchableOpacity>
    )
  }
}

export default Row


const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 20,

  },
  name: {
    fontSize: 20,
  }
});
