import React from "react";
import { Button, DevSettings } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import ActiveTrips from "../screens/ActiveTrips";
import Security from "../screens/Security";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Itinerary from "../screens/Itinerary";
import TripKit from "../screens/TripKit"
import Places from "../screens/Places"
import Review from "../screens/Review";
import Checklist from "../screens/Checklist";
import Guide from "../screens/Guide";
import { signOut } from '../Utils/Util'

import { useQuery, } from '@apollo/client';
import { ME_PI } from '../querys/userQuerys';
import { GET_EVENT } from '../querys/eventQuerys';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TripTabStack({ route }) {
    const tripName = route.params.name
    const tripDate = route.params.date

    const { loading: meLoading, error: meError, data: meData } = useQuery(ME_PI);
    const { loading: eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENT, { variables: { eventTrip: tripName, eventDate: tripDate } });

    return !meLoading && !meError && !eventLoading && !eventError && (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={
                {
                    headerShown: true,
                    tabBarLabelStyle: { fontSize: 8 }
                }
            }
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
            {meData.me.userType === "client" ?
                <Tab.Screen
                    name="Guía"
                    component={Guide}
                    initialParams={{ data: eventData }}
                />
                :
                <Tab.Screen
                    name="Lista"
                    component={Checklist}
                    initialParams={{ data: eventData }}
                />}
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
    const logout = async () => {
        try {
            signOut()
            DevSettings.reload()
        } catch (e) {
            console.log(e)
        } finally {

        }
    };
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name="Perfil"
                component={Profile}
                options={{
                    headerLeft: () => (
                        <Button
                            onPress={() => logout()}
                            title="Cerrar Sesión"
                            color="red"
                        />
                    ),
                }}
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
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Menú principal"
                    component={TabStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainStack;