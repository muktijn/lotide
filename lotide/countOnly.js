const countOnly = function(arr, obj) {
  var count = {};
  for (var i in obj) {
    if (obj[i]) {
      count[i] = 0;
      for (var j of arr) {
        if (obj[i] === j) {
          count[i]++;
        } 
      }
    }
  }
  return count;
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Passed: ${actual} !== ${expected}`);
}
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

