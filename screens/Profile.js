import { React, useState } from 'react'
import { Text, View, Button, DevSettings } from 'react-native';
import { useQuery, } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import StyledButton from "../components/StyledButton";
import StyledText from '../components/StyledText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn, signOut, getToken } from '../Utils/Util'

function Profile({ navigation }) {


    const logout = async () => {
        try {
            signOut()
            DevSettings.reload()
        } catch (e) {
            console.log("problems")
        } finally {

        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> si entraste</Text>
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
