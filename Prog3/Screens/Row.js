import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import PropTypes from "prop-types"

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 20,

  },
  name: {
    fontSize: 20,
  }
});

const Row = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectStudent(props)}
  >
    <Text style={{ fontSize: 20 }}>{props.name}</Text>
    <Text style={{ fontSize: 20 }}>{props.number}</Text>
  </TouchableOpacity>
);

Row.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Row;
