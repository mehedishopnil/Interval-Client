import React from "react";
import loadingGif from "../assets/Plant.gif"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">

      <img src={loadingGif} alt="" className="min-w-48"/>

    </div>
  );
};

export default Loading;
