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

function sumNestedArray(array) {

    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result += sumNestedArray(array[i]);
        } else result += array[i];
    }

    return result;

    //base case: n is 0 (last number)
    // if (n === 0) return array[n];

    //recursive case: keep summing as long as there are numbers
    // else return (array[n] + sumNestedArray(array, n-1));

}


// console.log(sumNestedArray([1,2,[3,4],[[[[5]]]]]))
// console.log(sumNestedArray([1,2,3,4,5], 4));

//i is the index, a is the array
function sum(a, i) {
    if (i < 0) {
        return 0;
    }

    let current = a[i];

    if (Array.isArray(a[i])) {
        current = sum(a[i], a[i].length - 1);
    }

    return current + sum(a, i - 1);
}

let input = [1, 2, [1, 2], 3, [5]];
console.log(sum((input, input.length - 1), 14));