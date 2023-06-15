import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import theme from './Theme'

const styles = StyleSheet.create({
    buttonGreen: {
        alignItems: theme.buttonGreen.alignItems,
        backgroundColor: theme.buttonGreen.backgroundColor,
        padding: theme.buttonGreen.padding,
    }
})

export default function StyledButton({ children, button, fontWeight, style, ...restOfProps }) {

    const textStyles = [
        styles.text,
        button === 'buttonGreen' && styles.buttonGreen

    ]
    return (
        <TouchableOpacity style={textStyles} {...restOfProps}>
            {children}
        </TouchableOpacity>

    )
}