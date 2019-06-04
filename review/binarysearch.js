function binarySearch(array, target) {

    let min = 0;
    let max = array.length - 1;

    while (max >= min) {

        let guess = Math.floor((min + max)/2);
        console.log(guess)
        
        if (array[guess] === target) return guess;
        else if (array[guess] < target) {
            min = guess + 1;
        } else max = guess - 1;

    }

    return -1;

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10))