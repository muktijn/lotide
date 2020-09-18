const findWaldo = function(names, found) {
  names.forEach(element => {if(element == "Waldo") { found(element); }} );
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found him at index ${index}!`);
});

