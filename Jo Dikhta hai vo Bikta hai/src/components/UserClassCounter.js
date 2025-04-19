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

  componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount");
    // const fetchUsersData = async () => {
    //   try {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data = await res.json();
    //     this.setState({
    //       users: data,
    //     });
    //     // console.log(data);
    //   } catch (e) {
    //     console.log("Error While Fetching Users Data: ", e);
    //   }
    // };
    // fetchUsersData();
    // this.timer = setInterval(() => {
    //   console.log("It runs...");
    // }, 1000);
  }
  componentDidUpdate() {
    console.log(this.props.name + "Child componentDidUpdate");
  }

  // componentDidUpdate(prevProps,prevState){

  //   if(this.state.count !== prevState.count){
  //     // code
  //   }
  // }
  componentWillUnmount() {
    // clearInterval(this.timer);
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
