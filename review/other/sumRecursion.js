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
// console.log(sum(input, input.length - 1));

//a is the accumulator sum, i is where in the array
// function sumTail(acc, arr, curArr, i) {
//     console.log('current input', acc, curArr, i);

//     if (i < 0) return acc;

//     if (Array.isArray(curArr[i])) {
//         console.log('element is an array so call again, make sure the arr is not lost', arr)
//         sumTail(acc, arr, curArr[i], curArr.length - 1);
//     } else {
//         console.log('element is not an array so we sum and send everything')
//         let current = acc + curArr[i];
//         console.log(current, arr, i-1)
//         sumTail(current, arr, arr, i-1)
//     }
// }

// console.log(sumTail(0, input, input, input.length - 1))

function sumTail(acc, arr, i) {

    console.log(acc, arr, i)

    if (i < 0) {
        console.log(('i is -1 so return acc!!', acc))
        return acc;
    } 

    acc += arr[i];

    console.log('after', acc, arr, i)
    sumTail(acc, arr, i-1);
}

console.log(sumTail(0, [1,2,3], 2))
