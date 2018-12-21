import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>

const SectionListStudents = props => {
  console.log(props)
  const renderItem = ({ item }) => <Row {...item} onRemove={props.onRemove} onSelectStudent={props.onSelectStudent} onValueChange={props.onValueChange}/>

  const studentsByLetter = props.students.reduce((obj, student) => {
    const firstLetter = student.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), student],
    }
  }, {})

  const sections = Object.keys(studentsByLetter).sort().map(letter => ({
    data: studentsByLetter[letter],
    title: letter,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}





export default SectionListStudents;