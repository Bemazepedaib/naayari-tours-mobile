import { React, useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ActivityIndicator, Dimensions, Image } from "react-native";
import StyledText from "../components/StyledText";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
//Mutation
import { useMutation } from "@apollo/client";
import { LOGIN } from "../mutations/userMutations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getStoreKeyName } from "@apollo/client/utilities";

const { width, height } = Dimensions.get('window')


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
            <Image source={require('../assets/Top.jpg')} style={styles.img} blurRadius={4} />
            <View style={styles.mainInputs}>
                <View style={styles.head}>
                    <StyledText style={styles.alig} fontSize='head' fontWeight='bold'>Hola</StyledText>
                    <StyledText style={styles.alig} fontSize='subheading' >Ingresa a tu cuenta</StyledText>
                </View>
                <StyledInput
                    style={styles.bord}
                    value={mail}
                    onChangeText={setMail}
                    placeholder="ejemplocorreo@gmail.com"
                    input='login'
                >
                </StyledInput>
                <StyledInput
                    style={styles.bord}
                    value={pass}
                    onChangeText={setPass}
                    placeholder="contraseña"
                    secureTextEntry={true}
                    input='login'>
                </StyledInput>
                <View>
                    <StyledButton style={styles.but} button='buttonLogin' onPress={() => { onPress() }}>
                        <StyledText color='black'>Iniciar Sesion</StyledText>
                    </StyledButton>
                    <StyledText style={styles.but} color='red'>{myError}</StyledText>
                    {req === true ?
                        <ActivityIndicator size="large" color="#AEC597" /> : ""
                    }
                </View>
            </View>
            <View style={styles.foot}>
                <StyledText style={styles.see} fontSize="body" fontWeight='bold'>Visitanos en nuestras redes sociales</StyledText>
                <View style={styles.buttonsSocialMedia}>

                    <StyledButton style={styles.faceB} button='buttonSocial' onPress={() => { }}>
                        <StyledText style={styles.face} fontSize="body" fontWeight='bold' color="primary" border={"normal"}><Image style={styles.sm1} source={require('../assets/Facebook.png')} /> Facebook</StyledText>
                    </StyledButton>


                    <StyledButton style={styles.tiktokB} button='buttonSocial' onPress={() => { }}>
                        <StyledText style={styles.tiktok} fontSize="body" fontWeight='bold' color="primary" border={"normal"}><Image style={styles.sm2} source={require('../assets/TikTok.png')} /> Tik Tok</StyledText>
                    </StyledButton>
                </View>

            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: "#AEC597",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80
    },
    mainInputs: {
        alignItems: 'center',
        width: '85%',
        backgroundColor: "#ffffff",
        height: height * .7,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#000000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    img: {
        position: "absolute",
        height: height / 2,
        resizeMode: "contain",
        bottom: height / 2,
    },
    bord: {
        borderWidth: 1,
        borderColor: "#000000",
        marginBottom: 25

    },
    alig: {
        textAlign: "center"
    },
    head: {
        marginTop: 50,
        marginBottom: 50,
    },
    but: {
        marginTop: 10,
        textAlign: "center"
    },
    see: {
        marginTop: 10,
        textAlign: "center",
        width: width
    },
    foot: {
        backgroundColor: "#AEC597",
        position: "absolute",
        bottom: -50,
        height: height * .15,
        width: width,
    },
    buttonsSocialMedia: {
        width: width,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    faceB: {
        justifyContent: "center",
        height: 50,
    },
    tiktokB: {
        height: 50,
        alignItems: "center",
    },
    face: {
        textAlignVertical: "center",
        textAlign: "center",
        backgroundColor: "#3B579D",
        height: 50,
        width: 150,
    },
    tiktok: {
        textAlignVertical: "center",
        textAlign: "center",
        backgroundColor: "#000000",
        height: 50,
        width: 150
    },
    sm1: {
        width: 22, height: 22,
        alignSelf: "center",
        left: 30
    },
    sm2: {
        width: 18, height: 18,
        alignSelf: "center",
        left: 30
    }

}
)

export default Login
