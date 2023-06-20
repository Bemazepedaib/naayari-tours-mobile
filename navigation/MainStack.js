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
import TripKit from "../screens/TripKit"
import Places from "../screens/Places"
import Review from "../screens/Review";

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TripTabStack({ route }) {
    const tripName = route.params.name

    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{ headerShown: true }}
        >
            <Tab.Screen
                name="Lugares"
                component={Places}
                initialParams={{ tripName: tripName }}
            />
            <Tab.Screen
                name="Kit de viaje"
                component={TripKit}
                initialParams={{ tripName: tripName }}
            />
            <Tab.Screen
                name="Seguridad"
                component={Security}
                initialParams={{ tripName: tripName }}
            />
            <Tab.Screen
                name="Itinerario"
                component={Itinerary}
                initialParams={{ tripName: tripName }}
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
            <Stack.Screen
                name="Reseña"
                component={Review}
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