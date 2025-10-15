import React from 'react';
import { Cpu } from 'lucide-react';
import { ALGORITHMS, ALGORITHM_NAMES } from '../constants';

const AlgorithmSelector = ({ algorithm, setAlgorithm, isDisabled }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-lime-400 mb-3 uppercase tracking-wider font-mono drop-shadow-[0_0_3px_#a3e635]">
        <Cpu className="inline mr-2 w-4 h-4" />
        Algorithm
      </label>
      <div className="relative">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={isDisabled}
          className={`
            w-full px-4 py-3
            bg-slate-900/90
            border-2 border-purple-500/50
            text-lime-400
            font-mono text-sm
            rounded-lg
            cursor-pointer
            transition-all duration-200
            hover:border-purple-400
            hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]
            focus:outline-none
            focus:border-purple-400
            focus:shadow-[0_0_15px_rgba(168,85,247,0.6)]
            disabled:opacity-50
            disabled:cursor-not-allowed
            appearance-none
            ${isDisabled ? '' : 'hover:bg-slate-800/90'}
          `}
        >
          {Object.entries(ALGORITHMS).map(([key, value]) => (
            <option key={value} value={value} className="bg-slate-900 text-lime-400">
              {ALGORITHM_NAMES[value]}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Algorithm description */}
      <div className="mt-2 text-xs font-mono uppercase tracking-wide text-yellow-300">
        {algorithm === ALGORITHMS.DIJKSTRA && (
          <p>GUARANTEES SHORTEST PATH • EXPLORES UNIFORMLY IN ALL DIRECTIONS</p>
        )}
        {algorithm === ALGORITHMS.A_STAR && (
          <p>GUARANTEES SHORTEST PATH • USES HEURISTIC FOR FASTER PATHFINDING</p>
        )}
        {algorithm === ALGORITHMS.DFS && (
          <p>DOES NOT GUARANTEE SHORTEST PATH • EXPLORES DEEP BEFORE BACKTRACKING</p>
        )}
      </div>
    </div>
  );
};

export default AlgorithmSelector;

