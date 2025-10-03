import React from 'react';

const PortfolioLink = () => {
  return (
    <div className="absolute top-0 right-0 z-20">
      <a
        href="https://msamaae.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500 text-gray-900 border-2 border-lime-600 rounded-none shadow-[0_4px_0_0_#4d7c0f] font-extrabold text-xs uppercase tracking-wider transition-all duration-100 hover:shadow-[0_6px_0_0_#4d7c0f] hover:translate-y-[-2px] active:shadow-none active:translate-y-[4px]"
      >
        <span className="sm:inline">Main Menu</span>
      </a>
    </div>
  );
};

export default PortfolioLink;
