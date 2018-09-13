import React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default props => (
    <Button 
    title='Calcular'
    onPress={props.acao}
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