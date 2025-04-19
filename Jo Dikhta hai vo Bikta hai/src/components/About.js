// import React from "react";
// import UserClassCounter from "./UserClassCounter";

// const About = () => {
//   return (
//     <div>
//       <h4>About US</h4>
//       <UserClassCounter />
//     </div>
//   );
// };

// export default About;

import React, { Component } from "react";
import UserClassCounter from "./UserClassCounter";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  // componentDidMount() {
  //   console.log("Parent ComponentDidMount");
  // }
  // componentWillUnmount() {
  //   console.log("Parent componentWillUnmount");
  // }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h4 className="font-bold text-slate-700 m-4">About US</h4>
        <UserClassCounter name={"First"} />
        {/* <UserClassCounter name={"Second"} /> */}
      </div>
    );
  }
}

export default About;
