/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  let total = 0;
  for (i in arr) {
    total++;
  }
  return (total);
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  let totalSum = 0;
  for (const i in arr) {
    totalSum += arr[i];
  }
  return (totalSum);
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  let totalSum = 0;
  if (!arr.length) {
    return null;
  }
  for (const i in arr) {
    totalSum += arr[i];
  }
  const numsCnt = arr.length;
  const average = totalSum / numsCnt;

  return round(average);
};

// Don't change below:
module.exports = { count, sum, mean };
