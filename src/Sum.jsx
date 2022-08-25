import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = { Num1: "", Num2: "", res: 0 };
  }

  Add = () => {
    var n1 = parseInt(this.state.Num1);
    var n2 = parseInt(this.state.Num2);
    this.setState({ res: n1 + n2 });
  };
  render() {
    return (
      <div>
        <h1>result : {this.state.res}</h1>
        <input
          type="text"
          onChange={(e) => this.setState({ Num1: e.target.value })}
          value={this.state.Num1}
        />
        <br />
        <input
          type="text"
          onChange={(e) => this.setState({ Num2: e.target.value })}
          value={this.state.Num2}
        />
        <br />
        <button title="Add" onClick={this.Add}>
          +
        </button>
      </div>
    );
  }
}
export default Sum;
