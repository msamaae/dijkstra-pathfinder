import React from 'react';
import { Target, Flag } from 'lucide-react';

const Node = React.memo(({ node, onMouseDown, onMouseEnter, onMouseUp }) => {
  const {
    row,
    col,
    isStart,
    isEnd,
    isWall,
    isVisited,
    isPath,
  } = node;

  // Determine node styling based on state - retro arcade style matching legend
  const getNodeClasses = () => {
    const baseClasses = 'w-full aspect-square cursor-pointer transition-all duration-150 flex items-center justify-center border-2 rounded-none';

    if (isStart) return `${baseClasses} bg-lime-500 border-lime-700 shadow-[0_0_15px_rgba(132,204,22,0.6)]`;
    if (isEnd) return `${baseClasses} bg-red-600 border-red-800 shadow-[0_0_15px_rgba(220,38,38,0.6)]`;
    if (isWall) return `${baseClasses} bg-purple-600 border-purple-700 shadow-[0_0_15px_rgba(147,51,234,0.8)]`;
    if (isPath) return `${baseClasses} bg-yellow-400 border-yellow-600 shadow-[0_0_20px_rgba(250,204,21,0.9)] animate-pulse`;
    if (isVisited) return `${baseClasses} bg-blue-500 border-blue-700 shadow-lg`;

    return `${baseClasses} bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600`;
  };

  // Icon rendering for start and end nodes
  const renderIcon = () => {
    if (isStart) return <Target className="w-1/2 h-1/2 text-white" />;
    if (isEnd) return <Flag className="w-1/2 h-1/2 text-white" />;
    return null;
  };

  return (
    <div
      className={getNodeClasses()}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      {renderIcon()}
    </div>
  );
});

Node.displayName = 'Node';

export default Node;

