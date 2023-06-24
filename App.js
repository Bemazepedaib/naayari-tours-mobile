import { StyleSheet, SafeAreaView } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import MainStack from './navigation/MainStack';
import { getToken } from './Utils/Util'

const httpLink = createHttpLink({
	uri: 'https://naayari-tours-backend.up.railway.app/NaayarAPI',
})

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


