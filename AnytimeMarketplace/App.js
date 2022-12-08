import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './navigation/MainContainer';

export default function App() {
  let x = 1;

  console.log("App executed");

  return (


    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    alignContent: 'centre',
    alignItems: 'top',
    height: 10,
    width: 50
  }
});
