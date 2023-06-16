import React from 'react'
import { Text, View, Button } from 'react-native';

function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Perfil</Text>
            <Button
                title='Ir a viajes'
                onPress={() => navigation.navigate('Viajes activos')}
            ></Button>
        </View>
    )
}

export default Profile
