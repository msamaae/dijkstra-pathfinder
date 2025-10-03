# Dijkstra's Algorithm Pathfinding Visualizer

A portfolio-grade, interactive visualization of Dijkstra's shortest path algorithm built with React, Tailwind CSS, and Lucide Icons.

## Features

- 🎨 **Interactive Grid**: 15x25 responsive grid with three interaction modes
- 🎯 **Three Modes**: Draw walls, set start position, set end position
- 🚀 **Animated Visualization**: Watch the algorithm explore nodes and find the shortest path
- ⚡ **Configurable Speed**: Choose from 5 animation speeds (5ms to 100ms)
- 📱 **Mobile Responsive**: Touch-friendly design for all screen sizes
- 🎨 **Modern UI**: Beautiful gradient backgrounds and smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm run dev
```

The app will automatically open in your browser at `http://localhost:3000`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Select a Mode**:
   - **Draw Walls**: Click or drag to create obstacles
   - **Set Start**: Click to reposition the start node (green)
   - **Set End**: Click to reposition the end node (red)

2. **Choose Animation Speed**: Select from the dropdown (Very Fast to Very Slow)

3. **Visualize**: Click the "Visualize" button to watch Dijkstra's algorithm find the shortest path

4. **Reset/Clear**:
   - **Reset Path**: Clears visited nodes and path (keeps walls)
   - **Clear Walls**: Removes all walls
   - **Clear All**: Complete reset to initial state

## Tech Stack

- **React** - UI framework with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Algorithm

Dijkstra's algorithm is a graph search algorithm that finds the shortest path between nodes. This visualizer demonstrates:

- How the algorithm explores nodes by distance
- The final shortest path from start to end
- How walls affect pathfinding

## License

MIT

