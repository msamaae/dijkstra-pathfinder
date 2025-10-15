/**
 * Depth-First Search (DFS) - Returns visited nodes in order and a path (not necessarily shortest)
 * DFS explores as far as possible along each branch before backtracking
 * Note: DFS does NOT guarantee the shortest path!
 * @param {Array} grid - 2D array of node objects
 * @param {Object} startNode - Starting node
 * @param {Object} endNode - Target node
 * @returns {Object} - { visitedNodesInOrder, shortestPath }
 */
export const dfs = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];
  const stack = [startNode];

  startNode.distance = 0;

  while (stack.length > 0) {
    const currentNode = stack.pop(); // LIFO - Last In First Out

    // Skip if already visited or is a wall
    if (currentNode.isVisited || currentNode.isWall) continue;

    // Mark as visited
    currentNode.isVisited = true;
    visitedNodesInOrder.push(currentNode);

    // Found the target
    if (currentNode === endNode) {
      return { visitedNodesInOrder, shortestPath: getPath(endNode) };
    }

    // Get unvisited neighbors and add to stack
    // Note: We reverse to prioritize certain directions (down, right, up, left)
    // This makes the visualization more interesting
    const neighbors = getUnvisitedNeighbors(currentNode, grid);

    // Add neighbors to stack in reverse order to explore in a specific direction first
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!neighbor.isVisited) {
        neighbor.distance = currentNode.distance + 1;
        neighbor.previousNode = currentNode;
        stack.push(neighbor);
      }
    }
  }

  // No path found
  return { visitedNodesInOrder, shortestPath: [] };
};

/**
 * Get unvisited neighbors (up, down, left, right)
 * Order matters for DFS visualization
 * @param {Object} node - Current node
 * @param {Array} grid - 2D array of nodes
 * @returns {Array} - Array of unvisited neighbor nodes
 */
const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const { row, col } = node;

  // Order: up, down, left, right
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(neighbor => !neighbor.isVisited && !neighbor.isWall);
};

/**
 * Backtrack from end node to get the path
 * Note: This is NOT necessarily the shortest path with DFS
 * @param {Object} endNode - The end node
 * @returns {Array} - Array of nodes representing the path found
 */
const getPath = (endNode) => {
  const path = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return path;
};

