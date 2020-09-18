const map = function(arr, call) {
  //var new = arr.forEach(elem => call(elem);
  const results = [];
  for (let item of arr) {
    results.push(call(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

