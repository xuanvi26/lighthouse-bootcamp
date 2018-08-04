function printItems(array) {
    array.forEach((item) => {
        if (item.constructor === Array) printItems(item);
        else console.log(item);
    })
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);