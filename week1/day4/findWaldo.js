//change to index of array where waldo is found: Found Waldo at index 2!

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


/*const myfunc = (elem, index) => {
    if (elem === "Waldo") {
        found(i);   // execute callback
    }
};

function findWaldo(arr, found) {
    arr.forEach(myfunc)
  }


arr.ForEach(myfunc)


  for (let i = 0; i < arr.length; i++) {  
    myfunc(elemn, i);
}

  //modify this part
  function actionWhenFound(index) {
    console.log("Found Waldo at index", index + '!');
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

  ["Alice", "Bob", "Waldo", "Winston"]
*/
