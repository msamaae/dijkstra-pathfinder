import React from "react";

const Legend = () => {
  return (
    <div className="mt-6 p-4 bg-gray-900 rounded-none border-2 border-lime-400 shadow-[4px_4px_0_0_#a3e635] transform transition-transform duration-150">
      <h3 className="text-base font-bold uppercase tracking-wider text-lime-400 mb-4 font-mono drop-shadow-[0_0_3px_#a3e635]">
        Pathfinder Status Keys
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs md:text-sm font-mono uppercase">

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-lime-500 rounded-none shadow-lg border-2 border-lime-700"></div>
          <span className="text-white">Start</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-red-600 rounded-none shadow-lg border-2 border-red-800"></div>
          <span className="text-white">End</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-purple-600 rounded-none shadow-lg border-2 border-purple-700"></div>
          <span className="text-white">Wall</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-none shadow-lg border-2 border-blue-700"></div>
          <span className="text-white">Visited</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yellow-400 rounded-none shadow-lg border-2 border-yellow-600"></div>
          <span className="text-white">Path</span>
        </div>
      </div>
    </div>
  );
};

export default Legend;
