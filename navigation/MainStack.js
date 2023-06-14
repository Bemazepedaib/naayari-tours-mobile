import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "../screens/Home";
import MainView from "../screens/MainView";
import Security from "../screens/Security";

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="MainView"
                    component={MainView}
                />
                <Stack.Screen 
                    name="Security"
                    component={Security}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;