import React from 'react';
import './styles.css';

import HomeDescription from './homedescription/HomeDescription';

/**
 * Home Section of the app.
 *
 * @component
 * @category App Body
 */
const Home = () => {
  return (
    <div id="home" className="home">
      <HomeDescription />
     
    </div>
  );
};

export default Home;
