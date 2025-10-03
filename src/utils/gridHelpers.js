/**
 * Creates an initial node object
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @param {number} startRow - Start node row
 * @param {number} startCol - Start node column
 * @param {number} endRow - End node row
 * @param {number} endCol - End node column
 * @returns {Object} - Node object
 */
export const createNode = (row, col, startRow, startCol, endRow, endCol) => ({
  row,
  col,
  distance: Infinity,
  isVisited: false,
  isWall: false,
  isStart: row === startRow && col === startCol,
  isEnd: row === endRow && col === endCol,
  previousNode: null,
});

/**
 * Generates the initial grid
 * @param {number} rows - Number of rows
 * @param {number} cols - Number of columns
 * @param {number} startRow - Start node row
 * @param {number} startCol - Start node column
 * @param {number} endRow - End node row
 * @param {number} endCol - End node column
 * @returns {Array} - 2D array of nodes
 */
export const generateInitialGrid = (rows, cols, startRow, startCol, endRow, endCol) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
      currentRow.push(createNode(row, col, startRow, startCol, endRow, endCol));
    }
    grid.push(currentRow);
  }
  return grid;
};

/**
 * Toggle wall state for a node
 * @param {Array} grid - Current grid
 * @param {number} row - Row index
 * @param {number} col - Column index
 * @returns {Array} - New grid with toggled wall
 */
export const toggleWall = (grid, row, col) => {
  const newGrid = grid.map((r) => r.map((node) => ({ ...node })));
  const node = newGrid[row][col];

  if (node.isStart || node.isEnd) return grid;

  node.isWall = !node.isWall;
  return newGrid;
};

/**
 * Set new start position
 * @param {Array} grid - Current grid
 * @param {number} row - New start row
 * @param {number} col - New start column
 * @param {Object} currentStart - Current start position
 * @returns {Object} - { newGrid, newStartPosition }
 */
export const setStartNode = (grid, row, col, currentStart) => {
  const newGrid = grid.map((r) => r.map((node) => ({ ...node })));
  const node = newGrid[row][col];

  if (node.isWall || node.isEnd) return { newGrid: grid, newStartPosition: currentStart };

  newGrid[currentStart.row][currentStart.col].isStart = false;
  node.isStart = true;

  return { newGrid, newStartPosition: { row, col } };
};

/**
 * Set new end position
 * @param {Array} grid - Current grid
 * @param {number} row - New end row
 * @param {number} col - New end column
 * @param {Object} currentEnd - Current end position
 * @returns {Object} - { newGrid, newEndPosition }
 */
export const setEndNode = (grid, row, col, currentEnd) => {
  const newGrid = grid.map((r) => r.map((node) => ({ ...node })));
  const node = newGrid[row][col];

  if (node.isWall || node.isStart) return { newGrid: grid, newEndPosition: currentEnd };

  newGrid[currentEnd.row][currentEnd.col].isEnd = false;
  node.isEnd = true;

  return { newGrid, newEndPosition: { row, col } };
};

/**
 * Clear all walls from the grid
 * @param {Array} grid - Current grid
 * @returns {Array} - New grid without walls
 */
export const clearWalls = (grid) => {
  return grid.map((row) =>
    row.map((node) => ({
      ...node,
      isWall: false,
    }))
  );
};

/**
 * Reset visited and path state (keeps walls)
 * @param {Array} grid - Current grid
 * @returns {Array} - New grid with reset state
 */
export const resetVisitedAndPath = (grid) => {
  return grid.map((row) =>
    row.map((node) => ({
      ...node,
      distance: Infinity,
      isVisited: false,
      previousNode: null,
      isPath: false,
    }))
  );
};

