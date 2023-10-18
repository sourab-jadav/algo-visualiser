import React, { useRef } from 'react';
import './styles.css';
import 'intersection-observer';
import IsVisible from 'react-is-visible';

/**
 * Home description in Home Section.
 *
 * @component
 * @category Home
 */
const HomeDescription = () => {
  const titleStyling = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(750px)`,
    transition: `all 1.5s ease-in-out`,
  });
  const descriptionStyling = (isVisible) => ({
    transform: isVisible ? `translate(0px)` : `translateX(-750px)`,
    transition: `all 1.5s ease-in-out`,
  });


  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="content" >
          <div className="title" style={titleStyling(isVisible)}>
            Sorting algorithms made easy
          </div>
          <div className="description" style={descriptionStyling(isVisible)}>
            Visualize the step by step process of popular sorting algorithms!
          </div>
        </div>
      )}
    </IsVisible>
  );
};

export default HomeDescription;
