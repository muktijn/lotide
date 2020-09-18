// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
  console.log(`Assertion Passed: ${actual} !== ${expected}`);
}
};

const findKey = function(obj, callback) {
  const result = undefined;
  for (let i of Object.keys(obj)) {
    if (callback(obj[i])) {
      return i;
    }
  }
  return result;
};

// TEST CODE
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


