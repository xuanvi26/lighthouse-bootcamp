/*var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

console.log('stringArray:', stringArray.join());
console.log('Sorted:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Sorted without a compare function:', numberArray.sort());
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Sorted without a compare function:', numericStringArray.sort());
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Sorted without a compare function:', mixedNumericArray.sort());
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
*/

/*
// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

console.log('If sort with only .sort function:', list.sort())

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

console.log('Array that holds objects with position and sort-value:', mapped);

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

console.log('Sorted with "complicated" compare function because it is an object:', mapped);

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});

console.log('Taking the VALUE of the indexes (keys) and putting them into the new sorted array:', result)
*/

var array = [10, 2, 5, 1, 9];
array.sort(function(a, b,) {
    return a - b;
});

console.log(array);