import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import theme from './Theme'

const styles = StyleSheet.create({
    buttonLogin: {
        top: 20,
        alignItems: theme.buttonLogin.alignItems,
        backgroundColor: theme.colors.primary,
        padding: theme.buttonLogin.padding,
        borderRadius: theme.buttonLogin.border,
        width: 150,
        borderWidth: theme.buttonLogin.borderWidth,
        borderColor: theme.buttonLogin.borderColor,
    },
    buttonSocial: {
        alignItems: theme.buttonSocial.alignItems,
        padding: theme.buttonSocial.padding,
        borderRadius: theme.buttonSocial.border,
    }
})

export default function StyledButton({ children, button, fontWeight, style, ...restOfProps }) {

    const textStyles = [
        styles.text,
        style,
        button === 'buttonLogin' && styles.buttonLogin,
        button === 'buttonSocial' && styles.buttonSocial,

    ]
    return (
        <TouchableOpacity style={textStyles} {...restOfProps}>
            {children}
        </TouchableOpacity>

    )
}