import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import CustomCheckBox from '../components/CustomCheckBox';
import { useQuery, } from '@apollo/client';
import { GET_EVENT } from '../querys/eventQuerys';

function Checklist({ navigation, route }) {

    const tripName = route.params.tripName
    const tripDate = route.params.tripDate

    let id = 1;
    const DATA = [];

    const { loading, error, data } = useQuery(GET_EVENT, { variables: { eventTrip: tripName, eventDate: tripDate } });

    const [listData, setListData] = useState([]);

    const handleCheckboxChange = itemId => {
        const newData = listData.map(item =>
            item.id === itemId ? { ...item, checked: !item.checked } : item,
        );
        setListData(newData);
    };

    const renderItem = ({ item }) => (
        <CustomCheckBox
            checked={item.checked}
            label={item.label}
            onChange={() => handleCheckboxChange(item.id)}
        />
    );

    const fillData = () => {
        data.event.users.map(user => {
            if (user.companion.length > 0) {
                DATA.push({ id: id++, label: user.userEmail, checked: false })
                user.companion.map(comp => {
                    DATA.push({ id: id++, label: comp.companionName, checked: false })
                })
            } else {
                DATA.push({ id: id++, label: user.userEmail, checked: false })
            }
        })
    }

    if (loading) return <View><ActivityIndicator size="large" /></View>
    if (error) return <Text>Error: {error.message}</Text>

    return !loading && !error && (
        <View style={styles?.container}>
            <FlatList
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default Checklist
