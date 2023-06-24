import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import theme from './Theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    head: {
        fontSize: theme.fontSizes.head
    },
    inputNormal: {
        paddingStart: theme.inputNormal.paddingStart,
        padding: theme.inputNormal.padding,
        borderRadius: theme.inputNormal.border,
        width: theme.inputNormal.width,
        height: theme.inputNormal.height,
        marginTop: theme.inputNormal.margintop,
        backgroundColor: theme.colors.white,
        color: theme.inputNormal.back
    }
})

export default function StyledInput({ children, color, fontSize, fontWeight, input, style, ...restOfProps }) {

    const textStyles = [
        style, styles.text,
        input === 'login' && styles.inputNormal,
        color === 'white' && styles.colorPrimary

    ]
    return (
        <TextInput style={textStyles} {...restOfProps}>
            {children}
        </TextInput>
    )
}