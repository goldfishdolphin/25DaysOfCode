import React from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import FlatlistPractice from './components/FlatlistPractice';
import PracticeSectionList from './components/practiceSectionList';
import ScrollVPractice from './components/ScrollVPractice';
import Sectionlist from './components/Sectionlist';
import TextInputPractice from './components/TextInputPractice';

export default function App() {
  let x = 1;

  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <TextInputPractice />
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
  },
})

