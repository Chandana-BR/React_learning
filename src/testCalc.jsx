import React, { Component } from "react";

export default class TestCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      res: 0,
    };
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.multiply = this.multiply.bind(this);
    this.div = this.div.bind(this);
  }

  add = () => {
    this.setState((state) => ({
      res: Number(state.number1) + Number(state.number2),
    }));
  };

  sub() {
    this.setState((state) => ({
      res: +state.number1 - +state.number2,
    }));
  }

  multiply() {
    this.setState((state) => ({
      res: Number(state.number1) * Number(state.number2),
    }));
  }

  div() {
    this.setState((state) => ({
      res: +state.number1 / +state.number2, // +operator also converts string into integers
    }));
  }

  render() {
    return (
      <div>
        <h1>Class component simple calci</h1>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ number1: e.target.value });
          }}
          value={this.state.number1}
        />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ number2: e.target.value });
          }}
          value={this.state.number2}
        />
        <h3>Result : {this.state.res}</h3>
        <button onClick={this.add}>Add +</button>&nbsp;
        <button onClick={this.sub}>Subtract -</button>&nbsp;
        <button onClick={this.multiply}>Multiply*</button>&nbsp;
        <button onClick={this.div}>Divide /</button>
      </div>
    );
  }
}
