# Pathfinder Visualizer

An interactive visualization of popular pathfinding algorithms that I built to better understand how different algorithms work. Compare Dijkstra's, A*, and DFS algorithms to see how they explore grids and find paths in different ways!

## What it does

- **Multiple algorithms**: Choose between Dijkstra's algorithm, A* search, and Depth-First Search (DFS)
- **Interactive grid**: Create walls by clicking and dragging, set start/end points
- **Live visualization**: Watch the algorithms find the shortest path step by step
- **Speed control**: Adjust animation speed to see the algorithm work at your own pace
- **Easy to use**: Simple controls for drawing walls, setting start/end positions, and clearing the grid
- **Responsive design**: Works on desktop and mobile devices

## Try it out

You'll need Node.js installed on your machine.

1. Clone this repo and install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and go to the URL shown in your terminal (usually `http://localhost:5173`)

## How it works

1. **Choose algorithm**: Select between Dijkstra's, A* search, or DFS
2. **Draw walls**: Click and drag to create obstacles in the grid
3. **Set start/end points**: Use the mode selector to place your start (green) and end (red) nodes
4. **Choose speed**: Pick how fast you want to see the algorithm run
5. **Hit visualize**: Watch the algorithm explore and find the shortest path
6. **Reset as needed**: Clear the path, walls, or start fresh

The visualization shows you exactly how each algorithm explores nodes and why it chooses certain paths over others.

## Built with

- React with hooks for the UI
- Vite for fast development and building
- Tailwind CSS for styling
- Lucide React for icons

## About the Algorithms

### Dijkstra's Algorithm

Dijkstra's algorithm finds the shortest path by always exploring the closest unvisited node first. It guarantees the shortest path and explores uniformly in all directions.

**Characteristics:**
- Guarantees the shortest path
- Explores nodes in order of distance from the start
- Works well for unweighted grids
- Explores equally in all directions

### A* Search Algorithm

A* combines Dijkstra's approach with a heuristic function that estimates the distance to the goal. This makes it faster than Dijkstra's while still guaranteeing the shortest path.

**Characteristics:**
- Guarantees the shortest path (with an admissible heuristic)
- Uses Manhattan distance as a heuristic
- More efficient than Dijkstra's for pathfinding
- Focuses exploration toward the goal

### Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking. Unlike Dijkstra's and A*, DFS does NOT guarantee the shortest path - it simply finds *a* path if one exists.

**Characteristics:**
- Does NOT guarantee the shortest path
- Uses a stack (LIFO - Last In, First Out) approach
- Explores deep into the grid before backtracking
- Memory efficient and fast at finding any path
- Great for demonstrating different search strategies

This visualizer helps you see:
- How each algorithm explores nodes differently
- Why A* is generally faster for optimal pathfinding
- How DFS can find paths quickly but not optimally
- How obstacles affect different algorithms
- The trade-offs between shortest path guarantees and exploration speed

It's a great way to understand some of the most fundamental algorithms in computer science!

