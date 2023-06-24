import React from 'react';
import { useQuery } from '@apollo/client';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { GET_TRIP } from '../querys/tripQuerys';
const image = { uri: 'https://img.freepik.com/foto-gratis/hombre-guapo-viajando-su-mochila_23-2149118702.jpg?w=360&t=st=1686942180~exp=1686942780~hmac=038c278b5750629a549a10c58c264e42f2a79ae8218b85aa1ae76fde46ffd001' };

function TripKit({ navigation, route }) {

	const tripName = route.params.tripName
	let a = 0;

	const { loading, error, data } = useQuery(GET_TRIP, { variables: { tripName: tripName } })
	if (error) return (<View><Text>{error.message}</Text></View>)

	return !loading && !error && (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<Text style={styles.text}>Kit de Viajero</Text>
				<ScrollView contentContainerStyle={styles.instructionsContainer}>
					{data.trip.tripKit.split("*").map(stop => (
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


export default TripKit;