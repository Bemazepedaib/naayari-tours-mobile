import React from 'react';
import { useQuery } from '@apollo/client';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { GET_TRIP } from '../querys/tripQuerys';
const image = { uri: 'https://img.freepik.com/foto-gratis/feliz-ciudad-turistica-mapa_329181-477.jpg?w=740&t=st=1687631114~exp=1687631714~hmac=c11c0d7fce58f1acc010f5e2a6a469904dc9755f3d0d5992d6496e7f8fd0dd9c' };

function Places({ navigation, route }) {

	const tripName = route.params.tripName
	let a = 0;

	const { loading, error, data } = useQuery(GET_TRIP, { variables: { tripName: tripName } })
	if (error) return (<View><Text>{error.message}</Text></View>)

	return !loading && !error && (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<Text style={styles.text}>Lugares recomendados</Text>
				<ScrollView contentContainerStyle={styles.instructionsContainer}>
					{data.trip.tripInformation.recommendedPlaces.split("*").map(stop => (
						stop !== "" ? <Text style={styles.text2} key={a++}>{stop}</Text> : null
					))}
				</ScrollView>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative'
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		top: 0,
		textTransform: 'uppercase',
		width: '100%',
		color: 'white',
		fontSize: 20,
		lineHeight: 44,
		fontWeight: 'bold',
		textAlign: 'center',
		opacity: 0.7,
		backgroundColor: '#000000c0',
	},
	instructionsContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	text2: {
		width: '90%',
		color: 'white',
		fontSize: 16,
		lineHeight: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		borderRadius: 10,
		opacity: 0.7,
		color: '#000',
		backgroundColor: '#fff',
		margin: 8,
		minHeight: 50,
		maxHeight: 50
	},
});


export default Places;