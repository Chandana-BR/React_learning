import React, { Component } from "react";
import User from "./User";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 1,
      count: 1,
      delete: false,
    };
    // this.Increase = this.Increase.bind(this);
  }

  Increase = () => {
    console.log("hello world");
  };

  //   static getDerivedStateFromProps() {
  //     // return {
  //     //   points: 10,
  //     //   count: 2,
  //     // };
  //     return null;
  //   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 5, points: 20 });
      console.log(`count ${this.state.count}`);
      console.log(`points ${this.state.points}`);
    }, 5000);
  }

  //   static getDerivedStateFromProps() {
  //     return {
  //       points: 20,
  //       count: 30,
  //     };
  //   }

  //   shouldComponentUpdate(nextProps) {
  //     if (nextProps.value !== this.props.value) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return (document.getElementById("prev").innerHTML = `Previous Points: 
      ${prevState.points} &nbsp;
      Previous Count: 
      ${prevState.count}`);
  };

  componentDidUpdate() {
    document.getElementById("new").innerHTML = `Current Points:
      ${this.state.points} &nbsp;
      Current Count: 
      ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <h1>Lifecycle</h1>
        <p>The gained points is {this.state.points}</p>
        <p>The count is {this.state.count}</p>
        <button onClick={this.Increase}>click to display msg in console</button>
        <br />
        <div id="prev"></div>
        <div id="new"></div>
        <button onClick={() => this.setState({ delete: true })}>
          Delete Users
        </button>
        {this.state.delete ? null : <User />}
      </div>
    );
  }
}
