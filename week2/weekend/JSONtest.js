var str = '{"a":1, "b":2, "foo":"bar"}'; 
var obj = JSON.parse(str); 

console.log(typeof(obj));
console.log(obj);  

delete obj.foo;       
var string = JSON.stringify(obj);  

console.log(typeof(string));
console.log(string);
