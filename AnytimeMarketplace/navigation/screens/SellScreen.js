import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SellScreen({ navigation }) {
    return (
        <Button
            title='Go to profile'
            onPress={() => navigation.navigate('Profile', { name: 'Tina' })}
        />
    );
}
export default SellScreen;