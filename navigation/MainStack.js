import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../screens/Home";
import ActiveTrips from "../screens/ActiveTrips";
import Security from "../screens/Security";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Itinerary from "../screens/Itinerary";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TripTabStack() {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        'Recomendaciones de seguridad': 'security',
                        'Itinerario': 'airplane-clock',
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
                name="Recomendaciones de seguridad"
                component={Security}
            />
            <Tab.Screen
                name="Itinerario"
                component={Itinerary}
            />
        </Tab.Navigator>
    )
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
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}

function TabStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name="Perfil"
                component={Profile}
            />
            <Stack.Screen
                name="Viajes activos"
                component={TripStack}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
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