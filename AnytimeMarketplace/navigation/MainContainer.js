import * as React from 'react';
import { View, Text, TabBarIOSItem } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';


function MainContainer
    () {
    const homeName = 'Home';
    const detailsName = 'Details';
    const ProfileName = 'Profile';
    const cartName = 'Cart';
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => {
                    tabBarIcon: ({ getFocusedRouteNameFromRoute, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                    };
                }}>

            </Tab.Navigator>


        </NavigationContainer>

    );
}

export default MainContainer
    ;