import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import { Topo, Resultado, Painel } from './components'

const Estilos = {
};

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            num1: '10',
            num2: '11',
            operacao: 'soma',
            resultado: ''
        }
        this.calcular = this.calcular.bind(this);
        this.atualizavalor = this.atualizavalor.bind(this);
        this.mudaOperacao = this.mudaOperacao.bind(this);
    }

    calcular() {
        let resultado = 1;
        // basta acessar this.state.operacao e fazer os condicionais 
        // para funcionar como esperado
        // if(this.state.operacao === 'soma') ...
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        
        this.setState({ resultado: resultado.toString() })
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

    mudaOperacao(operacao) {
        this.setState({ operacao })
    }

    render() {
        return (
            <View>
                <Topo />
                <Resultado
                    res={this.state.resultado} />
                <Painel
                    num1={this.state.num1}
                    num2={this.state.num2}
                    operacao={this.state.operacao}
                    atualizavalor={this.atualizavalor}
                    mudaOperacao={this.mudaOperacao}
                    calcular={this.calcular} />
            </View>
        );
    }
}
