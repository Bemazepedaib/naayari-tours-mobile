import React from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery, } from '@apollo/client';
import { ME } from '../querys/userQuerys';

function ActiveTrips({ navigation }) {

    const { loading, error, data } = useQuery(ME);
    let a = 0;

    if (loading) return <View><ActivityIndicator size="large" /></View>
    if (error) return <Text>Error: {error.message}</Text>

    const closed = data.me.trips.filter(trip => trip.tripStatus === "closed")
    const inactive = data.me.trips.filter(trip => trip.tripStatus === "inactive")

    return !loading && !error && (
        <View style={styles.container}>
            {closed.length > 0 ? <Text style={styles.titulo}>Viajes activos</Text> : null}
            {closed.map(trip => (
                <TouchableOpacity key={a++}
                    onPress={() => { navigation.navigate('Viaje', { name: trip.tripName, date: trip.tripDate }) }}
                >
                    <View style={styles.flex}>
                        <Text style={styles.text1}>{trip.tripName}</Text>
                        <Text style={styles.text1}>{trip.tripDate}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            {inactive.length > 0 ? <Text style={styles.titulo}>Viajes pasados</Text> : null}
            {inactive.map(trip => (
                <TouchableOpacity key={a++}>
                    <View style={styles.flex}>
                        <Text style={styles.text1}>{trip.tripName}</Text>
                        <Text style={styles.text1}>{trip.tripDate}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1ab05a'
    },
    titulo: {
        fontSize: 30,
        backgroundColor: '#171a20',
        color: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        textTransform: 'uppercase',
        width: '90%',
        textAlign: 'center'
    },
    flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        padding: 10,
        borderRadius: 10
    },
    text1: {
        fontSize: 20,
    }
});

export default ActiveTrips;