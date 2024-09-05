import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen name="Detail" component={DetailScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default BottomNavigator;