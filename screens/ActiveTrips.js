import React from 'react'
import { Text, View, Button } from 'react-native';
import { useQuery, } from '@apollo/client';
import { ME } from '../querys/userQuerys';

function ActiveTrips({ navigation }) {

    const { loading, error, data } = useQuery(ME);
    let a = 0;

    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error: {error.message}</Text>

    return !loading && !error && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Viajes activos</Text>
            {data.me.trips.map(trip => (
                <View key={a++}>
                    <Text>{trip.tripName}</Text>
                    <Button
                        title='Ir a viaje'
                        onPress={() => { navigation.navigate('Viaje', { name: trip.tripName }) }}
                    >
                    </Button>
                </View>
            ))}
        </View >
    )
}

export default ActiveTrips;