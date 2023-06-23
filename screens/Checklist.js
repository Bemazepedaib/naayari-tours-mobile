import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ImageBackground, Text } from 'react-native';
import CustomCheckBox from '../components/CustomCheckBox';

const image = { uri: 'https://img.freepik.com/foto-gratis/fondo-textura-papel-blanco_23-2148171218.jpg?w=740&t=st=1687562259~exp=1687562859~hmac=fe9ee0f2a0907a52c8fe0432e1d91674fe2d2a034fb6b7acc8b71fba84e5fdb0' };

function Checklist({ navigation, route }) {

    let id = 1;

    const paramData = route.params.data
    const usersData = [];

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
        paramData && paramData.event.users.map(user => {
            if (user.companion.length > 0) {
                usersData.push({ id: id++, label: user.userName, checked: false })
                user.companion.map(comp => {
                    usersData.push({ id: id++, label: comp.companionName, checked: false })
                })
            } else {
                usersData.push({ id: id++, label: user.userName, checked: false })
            }
        })
        return usersData
    }

    const [listData, setListData] = useState(fillData());

    return (
        <View style={styles?.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Pase de lista</Text>
                <FlatList
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
	}
});

export default Checklist
