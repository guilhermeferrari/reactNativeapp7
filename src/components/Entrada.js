import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

import Numero from './Numero';

export default props => (
    <View style={styles.viewEntrada}>
        <Numero nome='num1' str='Numero 1' num={props.num1} atualizavalor = {props.atualizavalor}/>
        <Numero nome='num2' str='Numero 2' num={props.num2} atualizavalor = {props.atualizavalor}/>
    </View>
)

const styles = StyleSheet.create({
    viewEntrada: {
        flexDirection: 'row',
        backgroundColor: 'skyblue',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    visor: {
        fontSize: 20,
        fontWeight: '300'
    }
})