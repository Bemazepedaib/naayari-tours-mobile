import React from 'react'
import { Text, View, Button } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Buenos días</Text>
            <Button
                title='Buenas tardes'
                onPress={ () => navigation.navigate('Security', {
                    tripName: "Real de Acuitapilco"
                })}
            ></Button>
        </View>
    )
}

export default Home;