import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../screens/Home";
import ActiveTrips from "../screens/ActiveTrips";
import Security from "../screens/Security";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        'Viajes activos': 'airplane',
                        'Perfil': 'account',
                    };
                    return (
                        <MaterialCommunityIcons
                            name={icons[route.name]}
                            color={color}
                            size={size}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Perfil"
                component={Profile}
            />
            <Tab.Screen
                name="Viajes activos"
                component={ActiveTrips}
            />
        </Tab.Navigator>
    )
}

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Menú principal"
                    component={TabStack}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainStack;