var outer = function() {
    var x = 10;
  
    var inner = function() {
      console.log("The value of x is: " + x);
    }
    return inner;
  };
  
  var foo = outer();
  foo(); 

  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  var z = makeAdder(3)(4);
  console.log(z);