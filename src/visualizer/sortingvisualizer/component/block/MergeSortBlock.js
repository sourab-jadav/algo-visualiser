import React from 'react';
import './styles.css';
import { animated } from 'react-spring';

/**
 * A block which animates to show the Merge Sort algorithm.
 *
 * @component
 * @category Block
 * @param {Object} item The information of the block.
 * @param {number} x The displacement of the block in the X-Direction.
 * @param {Object} rest All other information of the props.
 * @param {number} length The number of blocks.
 * @param {number} index Index of the block.
 * @param {boolean} isSwap A boolean value denoting whether this block is in a shift animation.
 * @param {number} width Width of the block.
 * @returns {JSX.Element} An animated block which translate in either the X or Y-Direction.
 */
const MergeSortBlock = ({ item, props: { x, ...rest }, length, index, isShift, width }) => {
  return (
    <animated.div
      className="animated-block"
      style={{
        ...rest,
        height: item.height * 10 + 9,
        width: width,
        zIndex: length - index,
        transform: isShift
          ? x.interpolate((x) => `translate3d(${x}px, 150px,0)`)
          : x.interpolate((x) => `translate3d(${x}px,0,0)`),
        backgroundImage: isShift
          ? `linear-gradient(45deg, #13B1B7, #11C2C9)`
          : `linear-gradient(45deg, #287ED0, #5466FF)`,
        pos: item.pos,
        prevPos: item.prevPos,
      }}
    >
      <span>{item.height}</span>
    </animated.div>
  );
};

export default MergeSortBlock;
