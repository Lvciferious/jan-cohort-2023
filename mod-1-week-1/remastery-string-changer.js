/*

String Changer REPL
Build a function called stringChanger() that takes in two arguments: a word and an operation.
Based on the operation, your function will return the word modified in some way.

The operations are:


"capitalize": Capitalize the first letter in the word.

"uppercase": Capitalize every letter in the word.

"double": Return the word twice in a row.

"reverse": Return the string with the letters in reverse order.

If the operation is invalid, return the word, unchanged.

This problem is worth 5 points. It is possible to get partial points on this problem.

*/


//GAMEPLAN
//non-tech solution:
// take the word "foo" and alter it.
//Capitalise
//all caps
//double the word
//reverse it (spell it backwards)
//leave it alon
//tech solution:
//use if condtionals and string methods to alter "foo"
//tie the if conditonals to an operation
//make sure code is not too specific; it must work outside of specific param conditions


function stringChanger(word, operation) {
    let capOne = word.charAt(0).toUpperCase();
    let capTwo = capOne + word.slice(1);

    let upper = word.toUpperCase();
    let doubler = word + word;
    let rev = word.split('').reverse().join('');

    if (operation === "capitalize") return capTwo;
    if (operation === "uppercase") return upper;
    if (operation === "double") return doubler;
    if (operation === "reverse") return rev;
    if (operation === "unknown") return word;
}

console.log(stringChanger("foo", "capitalize"));
console.log(stringChanger("foo", "uppercase"));
console.log(stringChanger("foo", "double"));
console.log(stringChanger("foo", "reverse"));
console.log(stringChanger("foo", "unknown"));


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
