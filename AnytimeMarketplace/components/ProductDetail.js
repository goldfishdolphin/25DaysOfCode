import * as React from 'react';
import { View, Text } from 'react-native';


function ProductDetails({ navigation, route }) {
    const { id } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                The route number is {JSON.stringify(id)}
            </Text>
            <ProductList />
        </View>
    );
}

export default ProductDetails;