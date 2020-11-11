// Crie dois states onde cada state guarde um number diferente;
// Crie uma arrow function que some os dois números e salve no seu primeiro state;
// Adicione o evento onClick, para executar a função;
// Mostre no H1 o seu primeiro state;
// Use o map para retornar o array de musicas na li;
import React, { Component } from "react";
import "./styles.css";

class Contador extends Component {
  state = {
    musics: [
      "Poetry",
      "Dentro ali",
      "Drunk on love",
      "Sunny",
      "Awake",
      "Otherside",
      "SOS"
    ],

    number: 1,
    number2: 7
  };
  soma = () => {
    this.setState({
      number: this.state.number + this.state.number2
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.soma}>Adicionar</button>
        <ul>
          {this.state.musics.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contador;
