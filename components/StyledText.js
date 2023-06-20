import React from 'react'
import { Text, StyleSheet } from 'react-native'
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
    gray: {
        color: theme.colors.gray
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

})

export default function StyledText({ children, color, fontSize, fontWeight, style, border, ...restOfProps }) {

    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'gray' && styles.gray,
        fontSize === 'subheading' && styles.subheading,
        fontSize === 'head' && styles.head,
        fontWeight === 'bold' && styles.bold,

    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}