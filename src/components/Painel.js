import React, { Component } from 'react'
import { Text, View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            operacao: 'soma'
        }
        this.calcular = this.calcular.bind(this);
        this.atualizavalor = this.atualizavalor.bind(this);
        this.mudaOperacao = this.mudaOperacao.bind(this);
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        alert(resultado)
    }

    atualizavalor(nome, valor) {
        const obj = {};
        obj[nome] = valor;
        this.setState(obj);
        // ou 
        // this.setState({
        // [nome] : valor   
        // })  
    }

    mudaOperacao(operacao){
        this.setState({operacao})
    }

    render() {
        return (
            <View>
                <Entrada num1={this.state.num1}
                    num2={this.state.num2}
                    atualizavalor={this.atualizavalor} />
                <Operacao operacao={this.state.operacao} mudaOperacao={this.mudaOperacao}/>
                <Comando acao={this.calcular} />
            </View>
        );
    }
}


export { Painel }