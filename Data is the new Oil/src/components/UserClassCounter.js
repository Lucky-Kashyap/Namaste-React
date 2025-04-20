import React, { Component } from "react";

class UserClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name,
      users: [],
    };
    console.log(this.props.name + "Child Constructor");
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {}
  componentDidUpdate() {
    console.log(this.props.name + "Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child componentWillUnmount");
  }
  render() {
    console.log(this.props.name + "Child Render");
    return (
      <div className="text-center">
        <h2 className="text-primaryColor">Count: {this.state.count}</h2>
        <button
          className="bg-sky-800 my-4 cursor-pointer text-slate-200 p-2 rounded hover:bg-sky-950"
          onClick={this.incrementCount}
        >
          Increment
        </button>

        <div>
          {this.state.users.map((user, i) => (
            <h3 key={i}>{user.name}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default UserClassCounter;
