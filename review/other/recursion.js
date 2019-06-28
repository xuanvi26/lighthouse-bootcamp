function sumToOne(number) {

    //base case
    if (number === 1) return 1;

    else if (number > 1) return number + sumToOne(number - 1)

}

// console.log(sumToOne(4));


function sumRange(a, b) {

    //base case 
    if (a === b) return b;

    return a + sumRange(a+1, b);

}

// console.log(sumRange(3, 7));

function printNestedArray(array) {

    for (elem of array) {
        if (Array.isArray(elem)) {
            printNestedArray(elem);
        } else console.log(elem);
    }

}

// printNestedArray([1,2,[3,4],[[[[5]]]]]);

function factorial(n) {
    if (n === 1) return 1;
    
    else return n * factorial(n-1);
    
  }
  
// console.log(factorial(4));

function fact(acc, n) {
    if (n === 1) {
        return acc;
    } else {
        return fact(acc * n, n - 1);
    }
}