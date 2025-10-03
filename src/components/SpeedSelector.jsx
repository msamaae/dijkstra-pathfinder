import React from 'react';
import { ANIMATION_SPEEDS } from '../constants/constants';

const SpeedSelector = ({ animationSpeed, setAnimationSpeed, isDisabled }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-lime-400 mb-2 uppercase tracking-wider font-mono drop-shadow-[0_0_3px_#a3e635]">
        Animation Speed
      </label>
      <select
        value={animationSpeed}
        onChange={(e) => setAnimationSpeed(Number(e.target.value))}
        disabled={isDisabled}
        className="w-full md:w-auto px-4 py-2 bg-gray-800 text-white border-2 border-lime-400 rounded-none shadow-lg focus:ring-2 focus:ring-lime-400 focus:border-lime-300 disabled:opacity-50 disabled:cursor-not-allowed font-mono"
      >
        <option value={ANIMATION_SPEEDS.VERY_FAST}>VERY FAST (5MS)</option>
        <option value={ANIMATION_SPEEDS.FAST}>FAST (10MS)</option>
        <option value={ANIMATION_SPEEDS.NORMAL}>NORMAL (20MS)</option>
        <option value={ANIMATION_SPEEDS.SLOW}>SLOW (50MS)</option>
        <option value={ANIMATION_SPEEDS.VERY_SLOW}>VERY SLOW (100MS)</option>
      </select>
    </div>
  );
};

export default SpeedSelector;

