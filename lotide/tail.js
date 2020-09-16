const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Passed: ${actual} !== ${expected}`);
}
};

const tail = function(array) {
  var arr = [];
  var i = 1;
  for (i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

