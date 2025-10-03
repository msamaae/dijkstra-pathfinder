import React from 'react';
import { Target, Flag, Square } from 'lucide-react';
import { MODES } from '../constants/constants';
import Button from './Button';

const ModeSelector = ({ mode, setMode, isDisabled }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-lime-400 mb-3 uppercase tracking-wider font-mono drop-shadow-[0_0_3px_#a3e635]">
        Mode Select
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Button
          variant="mode-wall"
          isActive={mode === MODES.WALL}
          disabled={isDisabled}
          onClick={() => setMode(MODES.WALL)}
          icon={Square}
        >
          Draw Walls
        </Button>

        <Button
          variant="mode-start"
          isActive={mode === MODES.START}
          disabled={isDisabled}
          onClick={() => setMode(MODES.START)}
          icon={Target}
        >
          Set Start
        </Button>

        <Button
          variant="mode-end"
          isActive={mode === MODES.END}
          disabled={isDisabled}
          onClick={() => setMode(MODES.END)}
          icon={Flag}
        >
          Set End
        </Button>
      </div>
    </div>
  );
};

export default ModeSelector;

