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
