import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "../screens/Home";
import MainView from "../screens/MainView";

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;