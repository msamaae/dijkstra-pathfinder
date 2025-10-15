/**
 * A* Algorithm - Returns visited nodes in order and shortest path
 * Uses Manhattan distance as heuristic
 * @param {Array} grid - 2D array of node objects
 * @param {Object} startNode - Starting node
 * @param {Object} endNode - Target node
 * @returns {Object} - { visitedNodesInOrder, shortestPath }
 */
export const aStar = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];

  // Initialize start node
  startNode.distance = 0;
  startNode.heuristic = manhattanDistance(startNode, endNode);
  startNode.fScore = startNode.distance + startNode.heuristic;

  const openSet = [startNode];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Sort by fScore (distance + heuristic)
    sortNodesByFScore(openSet);
    const currentNode = openSet.shift();

    // Skip walls
    if (currentNode.isWall) continue;

    // If we've reached a node with infinite distance, there's no path
    if (currentNode.distance === Infinity) {
      return { visitedNodesInOrder, shortestPath: [] };
    }

    // Mark as visited
    currentNode.isVisited = true;
    closedSet.add(currentNode);
    visitedNodesInOrder.push(currentNode);

    // Found the target
    if (currentNode === endNode) {
      return { visitedNodesInOrder, shortestPath: getShortestPath(endNode) };
    }

    // Update neighbors
    const neighbors = getUnvisitedNeighbors(currentNode, grid);
    for (const neighbor of neighbors) {
      if (closedSet.has(neighbor)) continue;

      const tentativeDistance = currentNode.distance + 1;

      // If this path to neighbor is better than any previous one
      if (tentativeDistance < neighbor.distance) {
        neighbor.previousNode = currentNode;
        neighbor.distance = tentativeDistance;
        neighbor.heuristic = manhattanDistance(neighbor, endNode);
        neighbor.fScore = neighbor.distance + neighbor.heuristic;

        // Add to open set if not already there
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return { visitedNodesInOrder, shortestPath: [] };
};

/**
 * Calculate Manhattan distance between two nodes
 * @param {Object} nodeA - First node
 * @param {Object} nodeB - Second node
 * @returns {number} - Manhattan distance
 */
const manhattanDistance = (nodeA, nodeB) => {
  return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);
};

/**
 * Sort nodes by fScore (distance + heuristic) in ascending order
 * @param {Array} nodes - Array of node objects
 */
const sortNodesByFScore = (nodes) => {
  nodes.sort((a, b) => (a.fScore || Infinity) - (b.fScore || Infinity));
};

/**
 * Get unvisited neighbors (up, down, left, right)
 * @param {Object} node - Current node
 * @param {Array} grid - 2D array of nodes
 * @returns {Array} - Array of unvisited neighbor nodes
 */
const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const { row, col } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(neighbor => !neighbor.isVisited);
};

/**
 * Backtrack from end node to get the shortest path
 * @param {Object} endNode - The end node
 * @returns {Array} - Array of nodes representing the shortest path
 */
const getShortestPath = (endNode) => {
  const shortestPath = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }

  return shortestPath;
};

