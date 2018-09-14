import React, { Component } from 'react'
import { Text, View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (
    <View>
        <Entrada
            num1={props.num1}
            num2={props.num2}
            atualizavalor={props.atualizavalor} />
        <Operacao 
            operacao={props.operacao} 
            mudaOperacao={props.mudaOperacao} />
        <Comando 
            acao={props.calcular} />
    </View>
);


export { Painel }