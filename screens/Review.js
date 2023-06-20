import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';

function Review({ navigation, route }) {

    const tripName = route.params.tripName

    return (
        <View style={styles.container}>
            <Text>Reseñas</Text>
            <Button
                title='Haz una reseña'
                onPress={() => { console.log("haz una reseña") }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Review
