import React from 'react';
import { useQuery } from '@apollo/client';
import { Text, View } from 'react-native';
import { GET_TRIP } from '../querys/tripQuerys';

function Security({ navigation }) {

    //const { tripName } = route.params;

    const { loading, error, data } = useQuery(GET_TRIP, { variables: { tripName: "Real de Acuitapilco" } })
    if (error) return ( <View><Text>{error.message}</Text></View> )

    return !loading && !error && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00a748' }}>
            <Text>{data.trip.tripInformation.recomendations}</Text>
        </View>
    )
}

export default Security