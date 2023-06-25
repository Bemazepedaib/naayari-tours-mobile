import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useQuery } from "@apollo/client";
import { GET_USER } from '../querys/userQuerys';
function Guide({ navigation, route }) {
    const event = route.params.data.event.eventGuide.split("|")
    const [imageUrl, setimageUrl] = useState(null);
    const image1 = { uri: 'https://img.freepik.com/foto-gratis/nado-peces-coloridos-mar-azul-claro-generado-ia_188544-10730.jpg?w=826&t=st=1687647128~exp=1687647728~hmac=0b3148dd69cbb01b09436c72b371805e71dc858527cb7fbf97cd4bb0b019a9af' }
    const { loading, error, data } = useQuery(GET_USER, {
        variables:
        {
            email: event[0]
        }
    })
    useEffect(() => {
        if (data) {
            setimageUrl(`https://drive.google.com/uc?id=${data.user.guidePhoto}`);
        }
    }, [data]);

    return !loading && !error && (
        <ImageBackground source={image1} resizeMode="cover" style={styles.imageBack}>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.text}>Conoce a tu guía</Text>
                    <Image source={{ uri: imageUrl }} style={styles.imageGuide} />
                    <View style={styles.whiteSquare}>
                        <Text style={styles.name}>{data.user.name}</Text>
                        <Text style={styles.p}>{data.user.guideDescription}</Text>
                    </View>

                </View>
            </View>
        </ImageBackground>
    )
}

export default Guide
const styles = StyleSheet.create({
    imageBack: {
        flex: 1,
        justifyContent: 'center'
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageGuide: {
        width: 150,
        height: 150,
        marginTop: 40,
        borderRadius: 150,
        zIndex: 2
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
    whiteSquare: {
        position: 'relative',
        top: -70,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        backgroundColor: "white",
        borderRadius: 10,
        opacity: 0.9
    },
    name: {
        marginTop: 20,
        fontSize: 12,
        lineHeight: 44,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    p: {
        fontSize: 8,
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 44,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});
