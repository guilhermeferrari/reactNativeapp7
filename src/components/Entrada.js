import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

import Numero from './Numero';

export default props => (
    <View style={styles.viewEntrada}>
        <Numero str='Numero 1'/>
        <Numero str='Numero 2'/>
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