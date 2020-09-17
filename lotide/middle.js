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

const middle = function(arr) {
  var mid = [];
  var index;
  if (arr.length <= 1) {
    return mid;
  }
  if (arr.length % 2 === 1) {
    index = (arr.length - 1)/2;
    mid.push(arr[index]);
  } else {
    index = arr.length/2;
    mid.push(arr[index-1]);
    mid.push(arr[index]);
  }
  return mid;
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);



