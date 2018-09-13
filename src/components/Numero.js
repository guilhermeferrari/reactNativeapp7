import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default props => (
    <TextInput
        placeholder='Numero'
    />
)

const styles = StyleSheet.create({
    viewVisor: {
        backgroundColor: 'gray',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    visor: {
        fontSize: 20,
        fontWeight: '300'
    }
})