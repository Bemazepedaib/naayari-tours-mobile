import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import StyledText from "../components/StyledText";
import StyledInput from "../components/StyledInput";

const Login = props => {


    return (
        <View style={styles.container}>
            <StyledText fontSize='head' fontWeight='bold'>Hola</StyledText>
            <StyledText fontSize='subheading'>Ingresa a tu cuenta</StyledText>

            <StyledInput input='login' placeholder="ejemplocorreo@gmail.com"></StyledInput>
            <StyledInput input='login' placeholder="contraseña"></StyledInput>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}
)

export default Login