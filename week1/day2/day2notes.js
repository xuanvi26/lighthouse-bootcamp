/* 

MARKDOWN
- '''javascript ... ''' to enter a code snippet
- # for headings
- * for bullet point
- tab for sub bullet 
- 1. for all numbers (smart cause can delete middle)
- *italique*
- **bold**
- [Title of image] (URL) or ![x] (URL) for image directly


DEV WORKFLOW
Intellectual and emotional aspects

Tips
- Approach as a (fun) puzzle --> less pressure
- Work in small times/ problems + plan
- What over how --> pratiquo pratique, the code does this and that's it.
- What can I do: imperfect code, make it seem like it works
--- Input --> logic --> output
--- Example: the sum problem 
- Commented/ redability/ long variable numbers
*/

'node sum.js 10 25' --> '35'
'node sum.js 10' --> 'You need to enter two numbers. You enterd one number'
'node sum.js' --> 'You need to enter two numbers'
'node sum.js 10 30 40' --> 'Too many numbers'
'node sum.js abcd' --> 'You need to enter numeric input'
'node sum.js 10 -12' --> '-2'
'node sum.js 10 3.5' --> '13.5'

// TO DO LIST
// need to get numbers
// need correct number of numbers
// need that all are numbers
function getSumMsg(a,b){ //functions, variables make the code more reusable
    if (procress.argv.length !== 4) {
        console.log('You need to enter two numbers. You eneterd ' + (process.argv.length - 2) + '.');
    } else if {
        // isNan(process.argv[2]) --> 'you need to enter numeric' Can show what they entered for extra clarity.
    } 
}
else {
// need to add numbers --> easy
// need to show the sum --> easy
}

/* Don't know what to do? GOOGLE / stack overflow
- node ___ (autocomplete google) --> try different things
- node --help in terminal to check for terms --> arguments
- console.log are your best friend when trying to figure out wtf is going on or node
---- console.log(process.argv); --> ['', ''] so it's an array of STRINGS
---- don't forget to add some text so you can remember what you are doing.
- pythontutor.com --> javascript
---- try things out and see what happens for Nan for example
---- find isNan function