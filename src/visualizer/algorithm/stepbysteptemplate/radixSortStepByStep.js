/**
 * Generates the step by step template Radix Sort.
 *
 * @method
 * @memberOf StepByStepTemplate
 * @param {any[]} animationArr An array that contains all the animation steps.
 * @param {number} idx Index of the current animation step.
 * @returns {string} The information regarding the current step of the animation.
 */
export const radixSortStepByStep = (animationArr, idx) => {
  const currentAnimation = animationArr[idx - 1];
  const height = currentAnimation.height;
  const location = currentAnimation.location;

  if (currentAnimation.isDistributing) {
    return `Put element ${height} at the end of bucket ${location}`;
  } else {
    return `Restore the first element (${height}) in bucket ${location} back to array`;
  }
};
