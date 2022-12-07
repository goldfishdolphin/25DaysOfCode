import * as React from 'react';
import { View, Text } from 'react-native';

function ProfileScreen({ navigation, route }) {
    return (
        <Text>This is {route.params.name}'s profile</Text>

    );
}

export default ProfileScreen;