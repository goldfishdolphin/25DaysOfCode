import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, Image, Linking } from 'react-native';
import ResponsiveUI from './components/ResponsiveUI';
// import { NativeBaseProvider, Text, Box } from "native-base";
// import { NavigationContainer } from '@react-navigation/native';
// import MainContainer from './navigation/MainContainer';


export default function App() {
  let x = 1;

  console.log("App executed");



  return (
    <SafeAreaView style={styles.container}>
      <ResponsiveUI />
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})

