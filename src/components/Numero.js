import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default props => (
    <TextInput
        placeholder={props.str}
        value={props.num}
        onChangeText={ value => props.atualizavalor(props.nome,value) }
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