//should also take in sentences with spaces --> HOW TO IGNORE SPACES. How to remove it before splitting?

const countLetters = (string) => {

    countLettersObj = {}
    let splitArrStr = string.split(' ').join('').split('');

    for (let i = 0; i < splitArrStr.length; i++) {
        if (countLettersObj[splitArrStr[i]] === undefined) {
            countLettersObj[splitArrStr[i]] = 1;
        } 
        else if (countLettersObj[splitArrStr[i]] !== undefined) {
            countLettersObj[splitArrStr[i]] += 1;
        }
    }
    return countLettersObj;
}

console.log(countLetters(' abbo'));