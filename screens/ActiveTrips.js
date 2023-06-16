import React from 'react'
import { Text, View, Button } from 'react-native';

function ActiveTrips({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Viajes activos</Text>
            <Button
                title='Ir a viaje'
                onPress={() => { navigation.navigate('Viaje', { name: 'Custom' }) }}    
            >
            </Button>
        </View>
    )
}

export default ActiveTrips;