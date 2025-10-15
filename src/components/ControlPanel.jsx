import React from "react";
import ModeSelector from "./ModeSelector";
import AlgorithmSelector from "./AlgorithmSelector";
import SpeedSelector from "./SpeedSelector";
import ActionButtons from "./ActionButtons";
import Legend from "./Legend";

const ControlPanel = ({
  mode,
  setMode,
  algorithm,
  setAlgorithm,
  animationSpeed,
  setAnimationSpeed,
  onVisualize,
  onResetGrid,
  onClearWalls,
  onClearAll,
  isVisualizing,
}) => {
  return (
    <div className="bg-gray-900 border-4 border-lime-400 shadow-[10px_10px_0_0_#a3e635] p-6 mb-6 rounded-none">
      <AlgorithmSelector
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        isDisabled={isVisualizing}
      />

      <ModeSelector mode={mode} setMode={setMode} isDisabled={isVisualizing} />

      <ActionButtons
        onVisualize={onVisualize}
        onResetGrid={onResetGrid}
        onClearWalls={onClearWalls}
        onClearAll={onClearAll}
        isDisabled={isVisualizing}
      />

      <SpeedSelector animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed} isDisabled={isVisualizing} />

      <Legend />
    </div>
  );
};

export default ControlPanel;
