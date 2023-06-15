import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../components/StyledText";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";

const Login = props => {

    const onPress = () => { console.log("object") };

    return (
        <View style={styles.container}>
            <View style={styles.mainInputs}>
                <StyledText fontSize='head' fontWeight='bold'>Hola</StyledText>
                <StyledText fontSize='subheading' color='gray'>Ingresa a tu cuenta</StyledText>
                <StyledInput input='login' placeholder="ejemplocorreo@gmail.com"></StyledInput>
                <StyledInput input='login' color='gray' placeholder="contraseña"></StyledInput>
            </View>

            <View>
                <StyledButton onPress={onPress}>
                    <StyledText button='buttonGreen'>Iniciar Sesion</StyledText>
                </StyledButton>
            </View>
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
    }
}
)

export default Login