var countdownGenerator = function (num) {
    var current = num;

    return function countdown () {
        if (current > 0) console.log('T-minus', current, '...');
        if (current === 0) console.log('Blast Off!');
        if (current < 0) console.log('Rockets already gone, bub!');
        current--;
    }

  };
  
  var countdown = countdownGenerator(5);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!