function printItems(array) {
    array.forEach((item) => {
        if (item.constructor === Array) printItems(item);
        else console.log(item);
    })
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);

// base case: when item is not an array
// recursive case: when item is an array