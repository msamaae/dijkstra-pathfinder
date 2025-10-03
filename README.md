# Dijkstra's Pathfinding Visualizer

An interactive visualization of Dijkstra's shortest path algorithm that I built to better understand how pathfinding algorithms work. It's a fun way to see the algorithm in action and experiment with different grid layouts.

## What it does

- **Interactive grid**: Create walls by clicking and dragging, set start/end points
- **Live visualization**: Watch Dijkstra's algorithm find the shortest path step by step
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

## Building for production

```bash
npm run build
npm run preview
```

## How it works

1. **Draw walls**: Click and drag to create obstacles in the grid
2. **Set start/end points**: Use the mode selector to place your start (green) and end (red) nodes
3. **Choose speed**: Pick how fast you want to see the algorithm run
4. **Hit visualize**: Watch Dijkstra's algorithm explore and find the shortest path
5. **Reset as needed**: Clear the path, walls, or start fresh

The algorithm shows you exactly how it explores each node and why it chooses certain paths over others.

## Built with

- React with hooks for the UI
- Vite for fast development and building
- Tailwind CSS for styling
- Lucide React for icons

## About Dijkstra's Algorithm

Dijkstra's algorithm finds the shortest path between two points by always exploring the closest unvisited node first. This visualizer helps you see:

- How it explores nodes in order of distance from the start
- Why it guarantees the shortest path
- How obstacles affect the pathfinding

It's a great way to understand one of the most fundamental algorithms in computer science!

