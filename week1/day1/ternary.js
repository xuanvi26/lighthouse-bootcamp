// compressed if and else statement
let lang = 'en';

let text = (lang === 'fr') ? 'Bonjour!' : 'Hello' ;


let operation = 'sum' //usually a dynamic variable (like someone's phone)
let sum = (operation === 'sum') ? (() => {
    return 5-3;
}) : ('false');

let num = sum();