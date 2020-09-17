// FUNCTION IMPLEMENTATION

const countLetters = function(arr) {
  var count = {};
  let i;
  for (i of arr) {
    if (count[i]) {
      count[i]++;
    } else {
      count[i] = 0;
    }
  }
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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(countLetters('LHL'), {L:2, H:1});

