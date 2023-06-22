import { StyleSheet, SafeAreaView } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import MainStack from './navigation/MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { signIn, signOut, getToken } from './Utils/Util'



//initiate apollo client
const httpLink = createHttpLink({
	uri: 'https://naayari-tours-backend.up.railway.app/NaayarAPI',
})
// const authLink = setContext((_, { headers }) => {
// 	return {
// 		headers: {
// 			authorization: token ? `Bearer ${token}` : ""
// 		}
// 	}
// })


const authLink = setContext(async (_, { headers }) => {
	const tok = await getToken()
	return {
		headers: {
			...headers,
			Authorization: tok ? `Bearer ${tok}` : ""

		}
	}
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

export default function App() {


	return (
		<ApolloProvider client={client}>
			<SafeAreaView style={styles.container}>
				<MainStack />
			</SafeAreaView>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
});
