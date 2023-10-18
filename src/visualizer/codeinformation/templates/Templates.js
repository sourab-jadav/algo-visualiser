import BubbleSort from './bubbleSortTemplate';
import InsertionSort from './insertionSortTemplate';
import QuickSort from './quickSortTemplate';
import RadixSort from './radixSortTemplate';
import BucketSort from './bucketSortTemplate';
import CountingSort from './countingSortTemplate';
import SelectionSort from './selectionSortTemplate';
import MergeSort from './mergeSortTemplate';
import ShellSort from './shellSortTemplate';
import HeapSort from './heapSortTemplate';

/**
 * Contains all the code templates for the sorting algorithms.
 *
 * @namespace Code templates
 * @type {Object}
 */
const templates = {
  'Bubble Sort': BubbleSort,
  'Insertion Sort': InsertionSort,
  'Quick Sort': QuickSort,
  'Radix Sort': RadixSort,
  'Bucket Sort': BucketSort,
  'Counting Sort': CountingSort,
  'Selection Sort': SelectionSort,
  'Merge Sort': MergeSort,
  'Shell Sort': ShellSort,
  'Heap Sort': HeapSort,
};

export default templates;
