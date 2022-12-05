import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import SauceExample from './sauceExample';
export default function App() {
  let x = 1;

  console.log("App executed");


  return (

    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <Image source={require('./assets/logo.png')} />
      <StatusBar style="auto" />
      <View>
        <SauceExample />
      </View>
    </SafeAreaView>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
