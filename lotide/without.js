// FUNCTION IMPLEMENTATION

const assertArraysEqual = function(arr1, arr2) {
if (eqArrays(arr1, arr2)) {
  console.log(`Assertion Passed: ${arr1} === ${arr2}`);
} else {
  console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
}

};

const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Passed: ${actual} !== ${expected}`);
}
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let i;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

const without = function (source, remove) {
  var items = [];
  let i, j;
  for (i of source) {
    for (j = 0; j < remove.length; j++) {
      if (i === remove[j]) {
         break;
      }
    }
    if (j === remove.length) {
      items.push(i);
    }
  }
  return items;
};

const words = ["hello", "world", "lighthouse"];
let arr = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(arr, ["hello", "world"]);

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


