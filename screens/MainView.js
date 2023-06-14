import React from 'react'
import { Text, View } from 'react-native';
import { useQuery} from '@apollo/client'
import { GET_USERS } from '../querys/userQuerys'

function MainView({ navigation }) {

    const { loading, error, data } = useQuery(GET_USERS)
    if (error) return ( <View><Text>{error.message}</Text></View> )

    return !loading && !error &&(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Buenas tardes</Text>
            {data.users.map(user => {
                console.log(user.name)
            })}
        </View>
    )
}

export default MainView;