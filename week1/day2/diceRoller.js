let args = process.argv;

let input = Number(args[2]);

// unwanted input: not just one number + nothing, a string, 
const explainWrongInput = () => {
    if (args.length !== 3) {
        console.log('You need to write 1 number.');
    }
    else if (isNaN(input)) {
        console.log('Your input is not a number.')
    }
    else return false;
}

const diceRoller = (input) => {
    let printDice = '';
    for (let i = 1; i <= input; i++) {
        printDice += (Math.ceil(Math.random() * 6) + ' ');

    }
    console.log(printDice)
}

if (!explainWrongInput()) diceRoller(input);

/*

const diceRoller = (input) => {
    if (args.length !== 3) {
        console.log('You need to write 1 number.');
    }
    else if (isNaN(input)) {
        console.log('Your input is not a number.')
    } else {
        let printDice = '';
        for (let i = 1; i <= input; i++) {
            printDice += (Math.ceil(Math.random() * 6) + ' ');
        }
    console.log(printDice);
    }
}

diceRoller(input);

*/