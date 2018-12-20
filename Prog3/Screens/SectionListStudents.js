import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

const renderHeader = ({ section }) => <Text>{section.title}</Text>

const SectionListStudents = props => {

  const renderItem = ({ item }) => <Row {...item} onSelectStudent={props.onSelectStudent} />

  const studentsByLetter = props.students.reduce((obj, student) => {
    const firstLetter = student.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), student],
    }
  }, {})

  const sections = Object.keys( ).sort().map(letter => ({
    data: studentsByLetter[letter],
    title: letter,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderHeader={renderHeader} />
}


SectionListStudents.propTypes = {
  students: PropTypes.array,
}


export default SectionListStudents;