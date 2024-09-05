import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigator from "./BottomNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigator;