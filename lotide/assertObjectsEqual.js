// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Passed: ${actual} !== ${expected}`);
}
};

const assertObjectsEqual = function(arr1, arr2) {
const inspect = require('util').inspect; // <= add this line
if (eqObjects(arr1, arr2)) {
  console.log(`Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
} else {
  console.log(`Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
}
};

const eqObjects = function(object1, object2) {

  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length != arr2.length) {
    return false;
  }
  let i;
  let j;
  for (i = 0; i < arr1.length; i++) {
    match = false;
    for (j=0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && object1[arr1[i]] === object2[arr2[j]]) {
        match = true;
        break;
      }
    }
    if (match === false) {
      return false;
    }
  }
  return true;

};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

