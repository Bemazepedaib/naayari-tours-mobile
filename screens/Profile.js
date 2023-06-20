import { React, useState } from 'react'
import { Text, View, Button, ActivityIndicator, RefreshControl, DevSettings } from 'react-native';
import { useQuery, } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import StyledButton from "../components/StyledButton";
import StyledText from '../components/StyledText';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Profile({ navigation }) {

    const { loading, error, data } = useQuery(ME);
    const logout = async () => {
        try {
            await AsyncStorage.removeItem("tokenAppMovil")
            DevSettings.reload()
        } catch (e) {
            console.log("problems")
        } finally {

        }
    };



    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error: {error.message}</Text>

    return !loading && !error && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{console.log(data)} si bro</Text>
            <StyledButton onPress={logout} >
                <StyledText>Salir</StyledText>
            </StyledButton>
            <Button
                title='Ir a viajes'
                onPress={() => navigation.navigate('Viajes activos')}
            ></Button>
        </View>
    )
}

export default Profile
