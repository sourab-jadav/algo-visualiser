import shellSort from '../../../../visualizer/algorithm/sortingalgorithms/shellSort';
import { assertSortSuccess } from '../../../../_testutil/TestUtil';
import {
  ARRAY_DUPLICATES,
  ARRAY_EXPECTED_RANDOM_MIXED,
  ARRAY_EXPECTED_RANDOM_NEGATIVE,
  ARRAY_EXPECTED_RANDOM_POSITIVE,
  ARRAY_EXPECTED_STRICTLY_DESCENDING,
  ARRAY_RANDOM_MIXED,
  ARRAY_RANDOM_NEGATIVE,
  ARRAY_RANDOM_POSITIVE,
  ARRAY_STRICTLY_ASCENDING,
  ARRAY_STRICTLY_DESCENDING,
} from '../../../../_testutil/ArraysUtil';

test('Already Sorted with duplicates', () => {
  const expected = [
    [0, 2, false],
    [1, 3, false],
    [0, 1, false],
    [1, 2, false],
    [2, 3, false],
  ];

  assertShellSortSuccess(ARRAY_DUPLICATES, ARRAY_DUPLICATES, expected);
});

test('Already Sorted ascending', () => {
  const expected = [
    [0, 2, false],
    [1, 3, false],
    [0, 1, false],
    [1, 2, false],
    [2, 3, false],
  ];

  assertShellSortSuccess(ARRAY_STRICTLY_ASCENDING, ARRAY_STRICTLY_ASCENDING, expected);
});

test('Descending array', () => {
  const expected = [
    [0, 2, false],
    [0, 2, true],
    [1, 3, false],
    [1, 3, true],
    [0, 1, false],
    [0, 1, true],
    [1, 2, false],
    [2, 3, false],
    [2, 3, true],
    [1, 2, false],
  ];

  assertShellSortSuccess(ARRAY_STRICTLY_DESCENDING, ARRAY_EXPECTED_STRICTLY_DESCENDING, expected);
});

test('Random array positive numbers', () => {
  const expected = [
    [0, 2, false],
    [1, 3, false],
    [1, 3, true],
    [0, 1, false],
    [1, 2, false],
    [1, 2, true],
    [0, 1, false],
    [2, 3, false],
  ];

  assertShellSortSuccess(ARRAY_RANDOM_POSITIVE, ARRAY_EXPECTED_RANDOM_POSITIVE, expected);
});

test('Random array negative numbers', () => {
  const expected = [
    [0, 2, false],
    [0, 2, true],
    [1, 3, false],
    [0, 1, false],
    [0, 1, true],
    [1, 2, false],
    [2, 3, false],
    [2, 3, true],
    [1, 2, false],
    [1, 2, true],
    [0, 1, false],
  ];

  assertShellSortSuccess(ARRAY_RANDOM_NEGATIVE, ARRAY_EXPECTED_RANDOM_NEGATIVE, expected);
});

test('Random array negative and positive numbers', () => {
  const expected = [
    [0, 2, false],
    [1, 3, false],
    [1, 3, true],
    [0, 1, false],
    [0, 1, true],
    [1, 2, false],
    [2, 3, false],
  ];

  assertShellSortSuccess(ARRAY_RANDOM_MIXED, ARRAY_EXPECTED_RANDOM_MIXED, expected);
});

const assertShellSortSuccess = (initialArray, sortedArray, expected) =>
  assertSortSuccess(initialArray, sortedArray, expected, shellSort);
