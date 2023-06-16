import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_TRIP } from '../querys/tripQuerys';
import { Text, View, StyleSheet, ImageBackground, ScrollView } from 'react-native';
const image = { uri: 'https://images.unsplash.com/photo-1623176035122-4e07bc19bab7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80' };

function Itinerary({ navigation }) {
	let a = 0;
	const { loading, error, data } = useQuery(GET_TRIP, { variables: { tripName: "Cascadas del Moco" } })
	if (error) return (<View><Text>{error.message}</Text></View>)

	return !loading && !error && (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<Text style={styles.text}>Itinerario</Text>
				<ScrollView contentContainerStyle={styles.instructionsContainer}>
					{data.trip.tripInformation.itinerary.split("*").map(stop => (
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

export default Itinerary