import { React, useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import StyledText from "../components/StyledText";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";

//Mutation
import { useMutation } from "@apollo/client";
import { LOGIN } from "../mutations/userMutations";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [req, setReq] = useState(false)
    const [token, setToken] = useState()
    const [myError, setMyError] = useState("")


    const [login] = useMutation(LOGIN)


    const onPress = () => {
        setReq(true);
        login({ variables: { email: mail, password: pass } })
            .then((response) => {
                setToken(response.data.login.split("%")[2]);
                setData();
            })
            .then(() => {
                setReq(false);
                navigation.navigate('Menú principal', { screen: 'Perfil' });
            })
            .catch((error) => {
                setMyError(error.message);
                setReq(false);
            });
    };

    setData = async () => {
        try {
            await AsyncStorage.setItem("tokenAppMovil", token)
        } catch (e) {
            console.log("Error al ingresar el token")
        }
    }

    getData = async () => {
        try {
            AsyncStorage.getItem("tokenAppMovil")
        } catch (e) {
            console.log("get err " + e)
        }
    }

    useEffect(() => {
        if (token) {
            if (token[0] === "client") {
                console.log("Es un cliente")

            } else if (token[0] === "guide") {
                console.log("Es un guia bro")
            }
        }
    }, [token])




    const onPress1 = () => { navigation.navigate('Menú principal', { screen: 'Perfil' }) };

    return (
        <View style={styles.container}>
            <View style={styles.mainInputs}>
                <StyledText fontSize='head' fontWeight='bold'>Hola</StyledText>
                <StyledText fontSize='subheading' color='gray'>Ingresa a tu cuenta</StyledText>
                <StyledInput
                    value={mail}
                    onChangeText={setMail}
                    placeholder="ejemplocorreo@gmail.com"
                    input='login'>
                </StyledInput>
                <StyledInput
                    value={pass}
                    onChangeText={setPass}
                    placeholder="contraseña"
                    secureTextEntry={true}
                    input='login'>
                </StyledInput>
            </View>

            <View>
                <StyledButton button='buttonGreen' onPress={() => { onPress() }}>
                    <StyledText color='primary'>Iniciar Sesion</StyledText>
                </StyledButton>
                <StyledText color='primary'>{myError}</StyledText>
            </View>
            {req === true ?
                <ActivityIndicator size="large" color="#00ff00" /> : ""
            }
            <StyledButton onPress={onPress1}>
                <StyledText >Tabs</StyledText>
            </StyledButton>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainInputs: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
}
)

export default Login