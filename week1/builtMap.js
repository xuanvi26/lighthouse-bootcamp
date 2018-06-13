/* 
make map function: 
- iterates through the array
- performs a CALLBACK function that returns something for each element of the array
- returns a new array with the "result" of each iteration
- takes 2 inputs: an array and a callback function
*/

const map = (arr, callback) => {
    resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callback(arr[i]));
    }
    console.log(resultArr);
}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});