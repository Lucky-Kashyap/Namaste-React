import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full gap-4 flex flex-wrap justify-between p-12">
      <div className="w-56 h-80 border divide-solid border-gray-300 bg-gray-200 rounded-xl cursor-pointer "></div>
      <div className="w-56 h-80 border divide-solid border-gray-300 bg-gray-200 rounded-xl cursor-pointer "></div>{" "}
      <div className="w-56 h-80 border divide-solid border-gray-300 bg-gray-200 rounded-xl cursor-pointer "></div>{" "}
    </div>
  );
};

export default Shimmer;
