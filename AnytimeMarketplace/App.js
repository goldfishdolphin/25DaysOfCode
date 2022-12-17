import React from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import FlatlistPractice from './components/FlatlistPractice';
import ScrollVPractice from './components/ScrollVPractice';
import Sectionlist from './components/Sectionlist';

export default function App() {
  let x = 1;

  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Sectionlist />
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

