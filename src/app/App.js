import React from 'react';
import './App.css';
import Home from '../home/Home';
import Visualizer from '../visualizer/sortingvisualizer/Visualizer';
import NavigationMenu from '../component/navigationMenu/NavigationMenu';

/**
 * Main controller of the App. Contains a navigation menu and its corresponding sections.
 *
 * @component
 * @category Main App
 */
function App() {
  return (
    <div className="app">
      <NavigationMenu />
      <div className="app-container">
        <Home />
        <Visualizer />
      </div>
    </div>
  );
}

export default App;
