import React, { Component } from "react";
import UserClassCounter from "./UserClassCounter";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h4 className="font-bold text-slate-700 m-4">About US</h4>
        <UserClassCounter name={"First"} />
      </div>
    );
  }
}

export default About;
