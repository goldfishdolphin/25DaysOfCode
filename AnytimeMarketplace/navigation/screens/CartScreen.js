import * as React from 'react';
import { View, Text } from 'react-native';

function CartScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 20, fontWeight: 'bold' }}> Cart Screen
            </Text>

        </View>
    );
}

export default CartScreen;