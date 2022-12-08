import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';


const Tab = createBottomTabNavigator();
function MainContainer() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />

        </Tab.Navigator>
    );

}
export default MainContainer;