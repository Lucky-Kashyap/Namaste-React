import React, { Component } from "react";

class UserClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.state.count);
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });

    console.log(this.state.count);
  };

  render() {
    return (
      <div className="counter-app">
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default UserClassCounter;
