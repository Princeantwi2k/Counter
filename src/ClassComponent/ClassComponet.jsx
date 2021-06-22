import React, { Component } from "react";

class ClassComponet extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handledecreament = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };
  handleIncreament = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button className="bnt" onClick={this.handledecreament}>
          Decrement
        </button>
        <h3>ClassCount {this.state.count}</h3>
        <button className="bnt" onClick={this.handleIncreament}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComponet;
