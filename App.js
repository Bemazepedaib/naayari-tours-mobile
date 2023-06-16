import { StyleSheet, SafeAreaView } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import MainStack from './navigation/MainStack';
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = createHttpLink({
	uri: 'https://naayari-tours-backend.up.railway.app/NaayarAPI',
});

const authLink = setContext((_, { headers }) => {
	const token = AsyncStorage.getItem('token')
	console.log(token)
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		}
	}
});

const client = new ApolloClient({
	uri: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ApolloProvider client={client}>
				<MainStack />
			</ApolloProvider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
});
