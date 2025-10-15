import React, { useState, useCallback, useEffect } from "react";
import Header from "./components/Header";
import PortfolioLink from "./components/PortfolioLink";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import ControlPanel from "./components/ControlPanel";
import { dijkstra } from "./utils/dijkstra";
import { aStar } from "./utils/aStar";
import { dfs } from "./utils/dfs";
import {
  generateInitialGrid,
  toggleWall as toggleWallHelper,
  setStartNode,
  setEndNode,
  clearWalls as clearWallsHelper,
  resetVisitedAndPath,
} from "./utils/gridHelpers";
import {
  GRID_CONFIG,
  DEFAULT_POSITIONS,
  MODES,
  DEFAULT_ANIMATION_SPEED,
  ALGORITHMS,
  DEFAULT_ALGORITHM
} from "./constants";

const DijkstraVisualizer = () => {
  const { ROWS, COLS } = GRID_CONFIG;
  const { START, END } = DEFAULT_POSITIONS;

  const [grid, setGrid] = useState(() => generateInitialGrid(ROWS, COLS, START.row, START.col, END.row, END.col));
  const [mode, setMode] = useState(MODES.WALL);
  const [algorithm, setAlgorithm] = useState(DEFAULT_ALGORITHM);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(DEFAULT_ANIMATION_SPEED);
  const [startNode, setStartNodePosition] = useState(START);
  const [endNode, setEndNodePosition] = useState(END);

  // ==================== GRID MANIPULATION ====================

  const handleToggleWall = useCallback((row, col) => {
    setGrid((prevGrid) => toggleWallHelper(prevGrid, row, col));
  }, []);

  const handleSetStart = useCallback(
    (row, col) => {
      setGrid((prevGrid) => {
        const { newGrid, newStartPosition } = setStartNode(prevGrid, row, col, startNode);
        if (newStartPosition !== startNode) {
          setStartNodePosition(newStartPosition);
        }
        return newGrid;
      });
    },
    [startNode]
  );

  const handleSetEnd = useCallback(
    (row, col) => {
      setGrid((prevGrid) => {
        const { newGrid, newEndPosition } = setEndNode(prevGrid, row, col, endNode);
        if (newEndPosition !== endNode) {
          setEndNodePosition(newEndPosition);
        }
        return newGrid;
      });
    },
    [endNode]
  );

  const handleClearWalls = useCallback(() => {
    setGrid((prevGrid) => clearWallsHelper(prevGrid));
  }, []);

  const handleResetGrid = useCallback(() => {
    setGrid((prevGrid) => resetVisitedAndPath(prevGrid));
  }, []);

  const handleClearAll = useCallback(() => {
    setGrid(generateInitialGrid(ROWS, COLS, START.row, START.col, END.row, END.col));
    setStartNodePosition(START);
    setEndNodePosition(END);
  }, [ROWS, COLS, START, END]);

  // ==================== MOUSE HANDLERS ====================

  const handleMouseDown = useCallback(
    (row, col) => {
      if (isVisualizing) return;

      setIsMousePressed(true);

      switch (mode) {
        case MODES.WALL:
          handleToggleWall(row, col);
          break;
        case MODES.START:
          handleSetStart(row, col);
          break;
        case MODES.END:
          handleSetEnd(row, col);
          break;
        default:
          break;
      }
    },
    [mode, isVisualizing, handleToggleWall, handleSetStart, handleSetEnd]
  );

  const handleMouseEnter = useCallback(
    (row, col) => {
      if (!isMousePressed || isVisualizing) return;

      // Only wall mode supports drag behavior
      if (mode === MODES.WALL) {
        handleToggleWall(row, col);
      }
    },
    [isMousePressed, mode, isVisualizing, handleToggleWall]
  );

  const handleMouseUp = useCallback(() => {
    setIsMousePressed(false);
  }, []);

  // Global mouse up listener to handle mouse release outside grid
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsMousePressed(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  // ==================== VISUALIZATION ====================

  const visualizeAlgorithm = useCallback(async () => {
    if (isVisualizing) return;

    setIsVisualizing(true);

    // Reset the grid first
    setGrid((prevGrid) => resetVisitedAndPath(prevGrid));

    // Wait for state to update
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Create a fresh grid for the algorithm
    const algorithmGrid = grid.map((row) =>
      row.map((node) => ({
        ...node,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
        isPath: false,
        heuristic: 0,
        fScore: Infinity,
      }))
    );

    const startNodeForAlgo = algorithmGrid[startNode.row][startNode.col];
    const endNodeForAlgo = algorithmGrid[endNode.row][endNode.col];

    // Select algorithm based on current selection
    let visitedNodesInOrder, shortestPath;
    if (algorithm === ALGORITHMS.A_STAR) {
      const result = aStar(algorithmGrid, startNodeForAlgo, endNodeForAlgo);
      visitedNodesInOrder = result.visitedNodesInOrder;
      shortestPath = result.shortestPath;
    } else if (algorithm === ALGORITHMS.DFS) {
      const result = dfs(algorithmGrid, startNodeForAlgo, endNodeForAlgo);
      visitedNodesInOrder = result.visitedNodesInOrder;
      shortestPath = result.shortestPath;
    } else {
      const result = dijkstra(algorithmGrid, startNodeForAlgo, endNodeForAlgo);
      visitedNodesInOrder = result.visitedNodesInOrder;
      shortestPath = result.shortestPath;
    }

    // Animate visited nodes
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      const node = visitedNodesInOrder[i];
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((r) => r.map((n) => ({ ...n })));
        newGrid[node.row][node.col].isVisited = true;
        return newGrid;
      });
    }

    // Animate shortest path
    for (let i = 0; i < shortestPath.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));

      const node = shortestPath[i];
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((r) => r.map((n) => ({ ...n })));
        newGrid[node.row][node.col].isPath = true;
        return newGrid;
      });
    }

    setIsVisualizing(false);
  }, [grid, startNode, endNode, isVisualizing, animationSpeed, algorithm]);

  return (
    <div
      className="min-h-screen p-4 md:p-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A233A 0%, #3B0068 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <PortfolioLink />
        <Header />

        <ControlPanel
          mode={mode}
          setMode={setMode}
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          animationSpeed={animationSpeed}
          setAnimationSpeed={setAnimationSpeed}
          onVisualize={visualizeAlgorithm}
          onResetGrid={handleResetGrid}
          onClearWalls={handleClearWalls}
          onClearAll={handleClearAll}
          isVisualizing={isVisualizing}
        />

        <Grid
          grid={grid}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
        />

        <Footer />
      </div>

      {/* CRT/Scanline effect overlay - placed last to render on top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                       linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))`,
          backgroundSize: '100% 4px, 3px 100%',
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default DijkstraVisualizer;
