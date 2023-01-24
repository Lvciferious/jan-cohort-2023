/*

Three or Seven
Write a function threeOrSeven that takes in a number
and returns true if the number is divisible by either 3 or 7 and false otherwise.

Write two versions of this function, using conditionals (if)
and without using conditionals.

*/

function threeOrSeven(div) {
    return (div % 3 === 0) || (div % 7 === 0);
}

console.log(threeOrSeven(3)); // true
console.log(threeOrSeven(35)); // true
console.log(threeOrSeven(100)); // false
console.log(threeOrSeven(84)); //true
