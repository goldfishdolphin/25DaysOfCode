import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, Image, Linking } from 'react-native';
import ScrollVPractice from './components/ScrollVPractice';

export default function App() {
  let x = 1;

  console.log("App executed");



  return (
    <SafeAreaView style={styles.container}>
      <ScrollVPractice />
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

