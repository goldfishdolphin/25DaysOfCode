import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  let x = 1;

  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Anytime Marketplace</Text>
      <Image source={require('./assets/logo.png')} />
      <StatusBar style="auto" />
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
