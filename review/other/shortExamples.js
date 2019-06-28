var str = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
var obj = JSON.parse(str);

// console.log(obj);     // an Object that has been deserialized

delete obj.foo;       // modify the object
var str2= JSON.stringify(obj);  // serialize it back to a string

// console.log(str2, typeof str2)

function foo() {
    console.log( x );
    console.log(hello)
    // console.log( y );
  
    var x = 1;
    if (x === 1) {
      let y = 2;
    }
    // console.log( y );

    function hello() {
        console.log(x)
    }

  }
  
  foo();
//   console.log( x );

function hello(a) {
  history();
  function history() {
    console.log(y);
  }
  var y = 10;
}

hello(2);