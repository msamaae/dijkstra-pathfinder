import React from "react";
import { Play, Trash2, RotateCcw } from "lucide-react";
import Button from './Button';

const ActionButtons = ({ onVisualize, onResetGrid, onClearWalls, onClearAll, isDisabled }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-lime-400 mb-3 uppercase tracking-wider font-mono drop-shadow-[0_0_3px_#a3e635]">
        Execute Actions
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          variant="primary"
          disabled={isDisabled}
          onClick={onVisualize}
        >
          Visualize
        </Button>

        <Button
          variant="warning"
          disabled={isDisabled}
          onClick={onResetGrid}
        >
          Reset Path
        </Button>

        <Button
          variant="secondary"
          disabled={isDisabled}
          onClick={onClearWalls}
        >
          Clear Walls
        </Button>

        <Button
          variant="danger"
          disabled={isDisabled}
          onClick={onClearAll}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
