import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from './Theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    red: {
        color: theme.colors.red
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
    border: {
        borderRadius: theme.buttonLogin.border
    }

})

export default function StyledText({ children, color, fontSize, fontWeight, style, border, ...restOfProps }) {

    const textStyles = [
        style, styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'red' && styles.red,
        fontSize === 'subheading' && styles.subheading,
        fontSize === 'head' && styles.head,
        fontWeight === 'bold' && styles.bold,
        border === 'normal' && styles.border,

    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}