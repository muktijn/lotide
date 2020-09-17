// FUNCTION IMPLEMENTATION

const letterPositions = function(arr) {
  var count = {};
  let i;
  for (i of arr) {
      count[i] = [];
  }
  for (i in arr) {
      count[arr[i]].push(i);
  }
  console.log(count);
  return count;
}

const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Failed: ${actual} !== ${expected}`);
}
};

// TEST CODE
assertEqual(letterPositions('LHL'), {L:2, H:1});

