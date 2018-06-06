//previous countLetters function
const countLetters = (string) => {

    countLettersObj = {}
    let splitArrStr = string.split(' ').join('').split('');
    //now we have an array without spaces of each letter

    for (let i = 0; i < splitArrStr.length; i++) {
        //if the letter hasn't appeared yet, a new key [letter] will correspond to an array containing the indice
        if (countLettersObj[splitArrStr[i]] === undefined) {
            countLettersObj[splitArrStr[i]] = [i];
        } 
        //otherwise if the letter is already there, add the current indice to the already made array
        else if (countLettersObj[splitArrStr[i]] !== undefined) {
            countLettersObj[splitArrStr[i]].push(i);
        }
    }
    return countLettersObj;
}

console.log(countLetters(' abbo'));


/*
if input is ' abbo'
a : 1
b : 2,3
o : 4
*/