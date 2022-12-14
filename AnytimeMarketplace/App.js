import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView, Image, Linking } from 'react-native';
// import { NativeBaseProvider, Text, Box } from "native-base";
// import { NavigationContainer } from '@react-navigation/native';
// import MainContainer from './navigation/MainContainer';


export default function App() {
  let x = 1;

  console.log("App executed");
  const [market, setMarket] = useState('shopping');
  const [product, setProduct] = useState({ category: 'clothing', quantity: 10 });
  const [click, setClick] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(true);
  const onClickHandler = () => {
    setMarket('Anytime Market');
    setProduct({ category: 'shoes', quantity: 9 });
    setCurrentProduct(false);
  };
  const addHandler = () => {
    setClick(click + 1);
  };


  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>{market}</Text>
      <Text>The product category is {product.category} and quantity is {product.quantity}.</Text>
      <Text>{currentProduct ? 'dress' : 'trainer'}</Text>
      <Button title='Update Market' onPress={onClickHandler} />
      <View >
        <Text style={styles.button2}>{click * 5}</Text>
        <Button title='Add' onPress={addHandler} />
        <Text>You clicked {click} times.</Text>
      </View>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple'
  },

  text: {
    color: 'purple',
    fontSize: 32,
    fontStyle: 'normal'

  },
  button2: {
    color: 'green',
    padding: 20,
    alignItem: 'center',
    fontSize: 40,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 20
  }
});
