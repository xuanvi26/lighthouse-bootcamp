var str = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
var obj = JSON.parse(str); //deserialized (string --> object)

console.log(typeof(obj));
console.log(obj);     // an Object that has been deserialized

delete obj.foo;       // modify the object
var string = JSON.stringify(obj);  // serialize it back to a string

console.log(typeof(string));
console.log(string);
