import { React } from 'react'
import { Image, View, Text, StyleSheet, ImageBackground,Button } from 'react-native';
import { useQuery, } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import StyledButton from "../components/StyledButton";
import StyledText from '../components/StyledText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn, signOut, getToken } from '../Utils/Util'
const image1 = { uri: 'https://img.freepik.com/foto-gratis/paisaje-montanoso-niebla_1150-18329.jpg?w=740&t=st=1687632103~exp=1687632703~hmac=1d74c0f1d0e105fbf449ad80fc8cca23eb82bb7d0752041ba14501bfdfce172f' }
function Profile({ navigation }) {

    const { loading, error, data } = useQuery(ME);
    return !loading && !error && (
        <ImageBackground source={image1} resizeMode="cover" style={styles.imageBack}>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.text}>¡HOLA NAAYARO!</Text>
                    <Image
                        style={styles.nayaariLogo}
                        source={require('../img/Oll.png')} />
                    <View style={styles.whiteSquare}>
                        <Text style={styles.textInfo}>{data.me.name}</Text>
                        <Text style={styles.textInfo}>Correo: {data.me.email}</Text>
                        <Text style={styles.textInfo}>Celular: {data.me.cellphone}</Text>
                        <Text style={styles.textInfo}>Dia de nacimiento: {data.me.birthDate}</Text>
                        <Button
                            title='Ir a viajes'
                            onPress={() => navigation.navigate('Viajes activos')}
                        ></Button> 
                    </View>
                </View>
                {/*                 <StyledButton onPress={logout} >
                    <StyledText>Salir</StyledText>
                </StyledButton>
                <Button
                    title='Ir a viajes'
                    onPress={() => navigation.navigate('Viajes activos')}
                ></Button> */}
            </View>
        </ImageBackground>
    )
}

export default Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        width: '90%'
    },
    imageBack: {
        flex: 1,
        justifyContent: 'center',
    },
    nayaariLogo: {
        position: 'relative',
        width: 180,
        height: 180,
        zIndex: 2,
        top: 20,
    },
    whiteSquare: {
        position: 'relative',
        top: -60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        backgroundColor: "white",
        borderRadius: 10,
        opacity: 0.9
    },
    text: {
        margin: 10,
        textTransform: 'uppercase',
        width: '100%',
        color: 'white',
        fontSize: 20,
        lineHeight: 44,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.7,
        backgroundColor: '#000000c0',
        borderRadius: 10,
    },
    textInfo: {
        fontSize: 12,
        lineHeight: 44,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
});
