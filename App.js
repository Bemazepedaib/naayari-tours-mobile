import { StyleSheet, SafeAreaView} from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import MainStack from './navigation/MainStack';

const httpLink = createHttpLink({
	uri: 'https://naayari-tours-backend.up.railway.app/NaayarAPI',
});

// const authLink = setContext((_, { headers }) => {
// 	return {
// 		headers: {
// 			...headers,
// 			authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ""
// 		}
// 	}
// });

const client = new ApolloClient({
	uri: 'https://naayari-tours-backend.up.railway.app/NaayarAPI', //authLink.concat(httpLink),
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

