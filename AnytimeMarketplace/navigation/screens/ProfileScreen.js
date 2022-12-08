import * as React from 'react';
import { View, Text } from 'react-native';

function ProfileScreen({ navigation, route }) {
    return (
        <View>
            <Text>hello</Text>
            <Text>This is {route.params.name}'s profile</Text>
        </View>

    );
}

export default ProfileScreen;