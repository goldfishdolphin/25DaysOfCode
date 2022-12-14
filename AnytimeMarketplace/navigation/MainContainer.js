import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import SellScreen from './screens/SellScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();
function MainContainer() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Sell') {
                        iconName = focused ? 'pricetag' : 'pricetag-outline';
                    } else if (route.name === 'Details') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    return <Ionicons name={iconName} color={color} size={size} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey'

            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Sell' component={SellScreen} />

        </Tab.Navigator>
    );

}
export default MainContainer;