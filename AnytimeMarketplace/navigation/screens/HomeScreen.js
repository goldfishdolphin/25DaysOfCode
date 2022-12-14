import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (

        <Button
            title='Go to profile'
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
        />

    );
}
export default HomeScreen;