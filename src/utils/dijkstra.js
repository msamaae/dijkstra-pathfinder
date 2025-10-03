/**
 * Main Dijkstra's algorithm - Returns visited nodes in order and shortest path
 * @param {Array} grid - 2D array of node objects
 * @param {Object} startNode - Starting node
 * @param {Object} endNode - Target node
 * @returns {Object} - { visitedNodesInOrder, shortestPath }
 */
export const dijkstra = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (unvisitedNodes.length) {
    // Sort nodes by distance
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    // Skip walls
    if (closestNode.isWall) continue;

    // If the closest node is at infinity, we're trapped
    if (closestNode.distance === Infinity) {
      return { visitedNodesInOrder, shortestPath: [] };
    }

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);

    // Found the end node
    if (closestNode === endNode) {
      return { visitedNodesInOrder, shortestPath: getShortestPath(endNode) };
    }

    updateUnvisitedNeighbors(closestNode, grid);
  }

  return { visitedNodesInOrder, shortestPath: [] };
};

/**
 * Get all nodes from the grid as a flat array
 * @param {Array} grid - 2D array of nodes
 * @returns {Array} - Flat array of all nodes
 */
const getAllNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

/**
 * Sort nodes by distance in ascending order
 * @param {Array} nodes - Array of node objects
 */
const sortNodesByDistance = (nodes) => {
  nodes.sort((a, b) => a.distance - b.distance);
};

/**
 * Update the distances of unvisited neighbors
 * @param {Object} node - Current node
 * @param {Array} grid - 2D array of nodes
 */
const updateUnvisitedNeighbors = (node, grid) => {
  const neighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of neighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
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

