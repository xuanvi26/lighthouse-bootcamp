//change to index of array where waldo is found: Found Waldo at index 2!

function findWaldo(arr, found) {
  arr.forEach(function(elem, index) {
    if (elem === "Waldo") {
      found(index);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);