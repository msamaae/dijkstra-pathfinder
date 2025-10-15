import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <h1
        className="text-2xl md:text-4xl font-extrabold mb-4 text-lime-400 drop-shadow-[0_0_8px_#a3e635] uppercase tracking-widest"
        style={{ fontFamily: 'monospace', lineHeight: '1.5' }}
      >
        PATHFINDER
        <br />
        VISUALIZER v3.1
      </h1>
      <p className="text-white/90 text-xs md:text-sm uppercase tracking-wider font-mono">
        ◄ Select Algorithm & Configure Grid Below ►
      </p>
    </div>
  );
};

export default Header;
