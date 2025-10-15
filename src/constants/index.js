export const GRID_CONFIG = {
  ROWS: 20,
  COLS: 20,
};

export const DEFAULT_POSITIONS = {
  START: {
    row: 10,
    col: 5,
  },
  END: {
    row: 10,
    col: 14,
  },
};

export const MODES = {
  WALL: "wall",
  START: "start",
  END: "end",
};

export const ANIMATION_SPEEDS = {
  VERY_FAST: 5,
  FAST: 10,
  NORMAL: 20,
  SLOW: 50,
  VERY_SLOW: 100,
};

export const DEFAULT_ANIMATION_SPEED = ANIMATION_SPEEDS.FAST;

export const ALGORITHMS = {
  DIJKSTRA: "dijkstra",
  A_STAR: "astar",
  DFS: "dfs",
};

export const ALGORITHM_NAMES = {
  [ALGORITHMS.DIJKSTRA]: "Dijkstra",
  [ALGORITHMS.A_STAR]: "A* Search",
  [ALGORITHMS.DFS]: "Depth-First Search (DFS)",
};

export const DEFAULT_ALGORITHM = ALGORITHMS.DIJKSTRA;
