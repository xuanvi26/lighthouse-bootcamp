function isPalindrome(str) {
    var processedStr = str.toLowerCase().split(" ").join("");
    var mid = Math.floor(processedStr.length/2);
    var last = processedStr.length - 1;
  
    for (var i = 0; i < mid; i++) {
      if (processedStr[i] !== processedStr[last - i]) return false;
    } 
    return true;
  }

  // Test driver code. These should all log true.
  console.log(isPalindrome('p') === true);
  console.log(isPalindrome('foo') === false);
  console.log(isPalindrome('racecar') === true);
  console.log(isPalindrome('Kayak') === true);
  console.log(isPalindrome('a santa at NASA') === true);
  console.log(isPalindrome('live without evil') === false);
  console.log(isPalindrome('just some random words') === false);