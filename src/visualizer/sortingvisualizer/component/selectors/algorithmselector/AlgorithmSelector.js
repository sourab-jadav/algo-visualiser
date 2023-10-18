import React, { useContext, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { VisualizerStateContext } from '../../../Visualizer';
import 'antd/dist/antd.min.css';
import './styles.css';

import { arrayCopy, generateArray } from '../../../util/ArrayUtil';


// import 'antd/dist/antd.css';
import { isRadixOrBucket } from '../../../util/GeneralUtil';//not needed right now
import { buckets } from '../../../util/CountingSortUtil';//not needed
import { stack } from '../../../util/RadixSortUtil';//not needed right now

/**
 * A drop down menu which allows users to pick their algorithm for the visualizer.
 *
 * @component
 * @category Visualizer
 */

//from the context we are taking 

//data size  and setting the data size

//setting the array data

//setting the algorithm

//checking isPlay is true or not

//checking if sorting is begun


//setcoutarr ,set stack arr, set history arr   //these may not needed
const AlgorithmChooser = () => {
  const {
    dataSize,
    setDataSize,
    isPlay,
    isInMidstOfSort,
    setIsInMidstOfSort,
    setIsReplay,
    setVisualizerAlgorithm,
    setArrayData,
    setAnimationPercentage,
    setIsReset,
    setCountArr,
    setStackArr,
    setHistoryArr,
  } = useContext(VisualizerStateContext);

  const [algorithm, setAlgorithm] = useState('Bubble Sort');

  /**
   * List of available Algorithms available in Sort-Algo.
   */
  const listOfAlgorithm = [
    { algorithmName: 'Bubble Sort', key: '0' },
    { algorithmName: 'Insertion Sort', key: '1' },
    { algorithmName: 'Selection Sort', key: '2' },
    { algorithmName: 'Merge Sort', key: '3' },
    { algorithmName: 'Quick Sort', key: '4' },
    { algorithmName: 'Heap Sort', key: '5' }
    // { algorithmName: 'Shell Sort', key: '6' },
    // { algorithmName: 'Counting Sort', key: '7' },
    // { algorithmName: 'Radix Sort', key: '8' },
    // { algorithmName: 'Bucket Sort', key: '9' },
  ];

  /**
   * Retrieves the algorithm name being chosen and set the system's algorithm to the selected algorithm.
   *
   * @param algorithmName Algorithm which is chosen via the drop down menu.
   */
  const handleMenuClick = (algorithmName) => {
    setAlgorithm(algorithmName);
    setVisualizerAlgorithm(algorithmName);
    if (algorithm !== algorithmName) {
      if (isInMidstOfSort) {
        setIsInMidstOfSort(false);
      }
      if (dataSize > 10 && isRadixOrBucket(algorithmName)) {
        setArrayData(generateArray(10, algorithmName));
        setDataSize(10);
      } else {
        setArrayData(generateArray(dataSize, algorithmName));
      }
      setIsReplay(false);
      setIsReset(true);
      setCountArr(arrayCopy(buckets));
      setStackArr(arrayCopy(stack));
      setHistoryArr([]);
      setAnimationPercentage(0);
    }
  };

  /**
   * A drop down list which displays a list of algorithms available in Sort-Algo.
   *
   * @type {JSX.Element}
   */
  const menu = (
    <Menu>
      {listOfAlgorithm.map(({ algorithmName, key }) => {
        return (
          <Menu.Item
            key={key}
            onClick={() => handleMenuClick(algorithmName)}
            style={{ color: '#8789B5' }}
          >
            {algorithmName}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div
      className="algorithm-selector-holder"
      style={{ cursor: isPlay ? 'not-allowed' : 'cursor' }}
    >
      <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'} disabled={isPlay}>
        <a
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          id="algorithm-selector-drop-down-arrow"
        >
          {algorithm}
          <DownOutlined
            style={{ transform: 'translateX(5px)', cursor: isPlay ? 'not-allowed' : 'cursor' }}
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default AlgorithmChooser;
