/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

const joinList = (conceptList) => {
    let joinedString = "";
    if (!conceptList.length) return "";
    else {
        for (i = 0; i < conceptList.length - 1; i++) {
            joinedString += conceptList[i] + ", ";
        }
    }
    return joinedString += conceptList[conceptList.length];
}

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

