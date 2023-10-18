import React from 'react';
import './styles.css';

/**
 * Navigation Menu of the app.
 *
 * @component
 * @category App header
 */
const NavigationMenu = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <a href="#home">Sorting Visualizer</a>
      </div>
      <ul className="nav-menu">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#visualizer">Visualizer</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
