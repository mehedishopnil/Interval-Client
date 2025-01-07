import React from "react";
import loadingGif from "../assets/loading.gif"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
