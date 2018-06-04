
function printInFrame(list) {
    var list = list.split(' ');
    // console.log('the list is: ' + list); --> WORKS, all words are in the array returned
    var longest = longestStr(list).length;
    //console.log('the longest word in the list is: ' + longestStr(list)); --> FIXED
    var border = repeat('*', (longest + 4));
    //console.log ('the border is: ' + border); --> was missing the two space broding and *
  
    console.log(border);
    for (word of list) {
      console.log('* ' + word + repeat(' ', longest - word.length) + ' *');
    }
    console.log(border);
  }
  
  function repeat(str, times) {
    var result = '';
  
    for (var i = 0; i < times; i++) {
      result += str;
    }
  
    return result;
  }
  
  function longestStr(list) {
    var longest = list[0];
  
    for (str of list) {
      if (str.length > longest.length) longest = str;
    }
  
    return longest;
  }
  
  
  // Test driver code, do not modify
  printInFrame('May the force be with you');
  printInFrame('Here\'s Johnny!');
  printInFrame('Supercalifragalisticexpialadocious');
  printInFrame('Lost, like tears in the rain');
  