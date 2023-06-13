import React from 'react'
import { Button } from 'react-native';
import { Text, View } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Buenos días</Text>
            <Button
                title='Buenas tardes'
                onPress={ () => navigation.navigate('MainView')}
            ></Button>
        </View>
    )
}

export default Home;