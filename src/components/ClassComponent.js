import React, { Component} from 'react'

export default class ClassComponent extends Component {

    render() {

        return (
            
            <li>{this.nome} {this.estaNaLista ? "está" : "não está"} convidado para a festa </li>
        
        )
    }
}