import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex gap-3">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
          <span className=" inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
        </span>
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping delay-200 absolute inline-flex h-full w-full rounded-full bg-gray-600 opacity-75"></span>
          <span className=" inline-flex rounded-full h-3 w-3 bg-gray-700"></span>
        </span>
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-700 opacity-75"></span>
          <span className=" inline-flex rounded-full h-3 w-3 bg-gray-800"></span>
        </span>
      </div>
    </div>
  );
}

export default Loading;
