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

function TripTabStack() {
    <Tab.Navigator
        screenOptions={{ headerShown: true }}
    >
        <Tab.Screen
            name="Avisos de seguridad"
            component={Security}
        />
    </Tab.Navigator>
}

function TripStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name="Viajes"
                component={ActiveTrips}
            />
            <Stack.Screen
                name="Viaje"
                component={TripTabStack}
            />
        </Stack.Navigator>
    )
}

function TabStack() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
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
                component={TripStack}
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