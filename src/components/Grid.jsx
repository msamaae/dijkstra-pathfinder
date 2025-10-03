import React from 'react';
import Node from './Node';
import { GRID_CONFIG } from '../constants/constants';

const Grid = ({
  grid,
  onMouseDown,
  onMouseEnter,
  onMouseUp
}) => {
  const { COLS, ROWS } = GRID_CONFIG;

  return (
    <div className="bg-gray-900 border-4 border-lime-400 shadow-[10px_10px_0_0_#a3e635] p-6 rounded-none flex items-center justify-center">
      <div
        className="grid gap-1 w-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          maxWidth: 'min(100%, calc(100vh - 400px))',
          aspectRatio: `${COLS} / ${ROWS}`,
        }}
      >
        {grid.map((row, rowIdx) =>
          row.map((node, nodeIdx) => (
            <Node
              key={`${rowIdx}-${nodeIdx}`}
              node={node}
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseUp={onMouseUp}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Grid;
