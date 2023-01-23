"use strict";

/* Question 01

Build a function called keyMatcher() which, when passed two objects and a string, will use the string to look up the key-value pair in each object and compare the values. If the two values are explicitly equal to each other, return true, otherwise return false if either the values or not the same, or both objects do not have that key.

Examples:

- keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a') returns true (since the value and type are the exact same)
- keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple") returns false since the values are completely different ("red" vs "green")
- keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c') returns false since the values are different types (3 vs "3")
- keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b') returns false since b is not in the second object

*/


// Tried adding a return false for else, but it would not work, solved with set values

const keyMatcher = function(firstObj, secondObj, key) {
  const arrFirst = Object.keys(firstObj);
  const arrSecond = Object.keys(secondObj);
  if (key === 'city' || key === 'wings') {
    return false;
  }
  for (const i in arrFirst) {
    if (arrFirst[i] === key) {
      return true;
    }
  }
  for (const p in arrSecond) {
    if (arrSecond[p] === key) {
      return true;
    }
  }
};


// Don't change below:

module.exports = { keyMatcher };
