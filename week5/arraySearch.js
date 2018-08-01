const searchLinear = (array, item) => {
    let index = null;

    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            index = i;
            break;
        }
    }

    return index;
}

// const searchBinary = (array, item) => {

//     let min = 0;
//     let max = array.length - 1;

//     while (min < max) {
//         const avg = Math.floor((min + max / 2));
//         const cur = array[avg];
//         if (cur === item) return avg;
//         else if (cur < item) min = avg + 1;
//         else max = avg - 1;
//     }
//     return null;
// }

function search(array, item) {
    let min = 0;
    let max = array.length - 1;
  
    while (true) {
      const middleIndex = Math.floor((min + max)/2.0);
      const currentItem = array[middleIndex];
  
      if (currentItem === item) {
        // Found it
        return middleIndex;
      } else if (currentItem < item) {
        // Look at the right side
        min = middleIndex + 1;
      } else {
        // Look at the left side
        max = middleIndex - 1;
      }
  
      if (min > max) {
        return null;
      }
    }
  }

console.log(searchLinear([1, 2, 3], 3));
console.log(searchBinary([1, 2, 3], 3));
console.log(search([1, 2, 3], 3));