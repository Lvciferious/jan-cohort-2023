/*

tring Changer
This problem is worth 1 points.
You may receive partial credit.
Build a function called stringChanger() that takes in two arguments: a word and an operation. Based on the operation, your function will return the word modified in some way. The operations are:


"capitalize": Capitalize the first letter in the word.


"uppercase": Capitalize every letter in the word.


"double": Return the word twice in a row.


"reverse": Return the string with the letters in reverse order.


If the operation is invalid, return the word, unchanged.


This problem is worth 5 points. It is possible to get partial points on this problem.

*/

//GAMEPLAN
//Non-tech solution:
//alter the returned string
//must double0 it, reverse it, capitalise it, snd uppercase every letter
//but if there's an invalid option, leave string alone
//tech solution:
//return double the letter (concat the word on return)
//use, .slice, .reverse, .join to reverse word
//use .slice, .toUpperCase to capitalise beginning letter
//.toUpperCase to return fully capitalised word
//return plain word if invalid
//if else statements


function stringChanger(word, operation) {
    let one = word.slice('');
    let two = word.toUpperCase();
    let three = word + word;
    let four = word.split('').reverse().join(''); {

    if (operation === "capitalize") return one;
    if (operation === "uppercase") return two;
    if (operation === "double") return three;
    if (operation === "reverse") return four;
    if (operation === "unknown") return word;
}
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
