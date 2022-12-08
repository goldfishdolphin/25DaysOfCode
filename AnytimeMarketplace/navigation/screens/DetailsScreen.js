import * as React from 'react';
import { View, Text } from 'react-native';
import ProductList from '../../components/ProductsList';

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 20, fontWeight: 'bold' }}> Go to Home
            </Text>
            <ProductList />
        </View>
    );
}

export default DetailsScreen;