const searchLinear = (array, item) => {
    let index = null;

    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            index = i;
            break;
        }
    }

    return index;
}

const searchBinary = (array, item) => {

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        const avg = Math.floor((min + max) / 2.0);
        const cur = array[avg];
        if (cur === item) return avg;
        else if (cur < item) min = avg + 1;
        else max = avg - 1;
    }
    return null;
}

console.log(searchBinary([1, 2, 3, 4, 5, 6, 7], 3));
console.log(search([1, 2, 3, 4, 5, 6, 7], 3));