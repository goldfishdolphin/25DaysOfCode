import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import MainContainer from './navigation/MainContainer';
import SauceExample from './sauceExample';
export default function App() {
  let x = 1;

  console.log("App executed");


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} />
      </View>

      <MainContainer />
    </SafeAreaView>


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
