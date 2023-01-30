/*

Debugging multiplesOfSeven
This problem is worth 4 points.
You may receive partial credit.
 Your friend is working on a function called multiplesOfSeven()
which returns an array containing all integers below that number that are
multiples of seven (for example: 7, 14, 21, etc...). The array should be ordered
from smallest to highest. Unfortunately, the code is not working correctly. Help
them fix it!



function multiplesOfSeven(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// Expected return values
console.log(multiplesOfSeven(85));
// [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84]
console.log(multiplesOfSeven(15));
// [ 7, 14 ]
console.log(multiplesOfSeven(7));
// [ 7 ]
console.log(multiplesOfSeven(1));
// []





//SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE
let score = 0;

const arrComparison = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) return false;
    i++;
  }
  return true;
}

if (arrComparison(multiplesOfSeven(85), [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84])) score++;
if (arrComparison(multiplesOfSeven(15), [ 7, 14 ])) score++;
if (arrComparison(multiplesOfSeven(7), [ 7 ])) score++;
if (arrComparison(multiplesOfSeven(1), [])) score++;

console.log("You have scored " + score + "/4 points.");





Operate

This problem is worth 5 points.
You may receive partial credit.

 Build a function that takes in three arguments: num1, num2,
and a string operation. Each number will be an integer and the operation will
be greater than, less than, equal to or not equal to. Your function will
perform the operation between the two numbers and return the answer.

If the operation is invalid, return the string "Invalid Operation".

Did you find this lesson helpful?



//GAMEPLAN
//non-tech solution:
//Look at two numbers and determine their characteristics based on 5 criteria:
//greater thn/less than, equal to/not equal to, and invalid
//If the numbers meet each criteria that they're judged against return true
///if not, it's false
//if you try to use invald criteria, it returns invalid
//Tech-solution:
//need if conditionals
//an operation to run the conditionals against
//explict returns of true or false



function operate(num1, num2, operation) {
 // const five = 'Invalid Operation';

    if (operation === 'greater than')
        return greater(num1, num2);
    if (operation === 'less than')
        return less(num1, num2);
    if (operation === 'equal to')
        return equal(num1, num2);
    if (operation === 'not equal to')
        return notEqual(num1, num2);
    else return 'Invalid Operation';

}



function greater(num1, num2) {
    return num1 > num2;
}

function less(num1, num2) {
    return num1 < num2;
}

function equal(num1, num2) {
    return num1 === num2;
}

function notEqual(num1, num2) {
    return num1 !== num2;
}



console.log(operate(456, 123, "greater than"))
console.log(operate(654, 654, "less than"))
console.log(operate(99, 3, "equal to"))
console.log(operate(111, 3, "not equal to"))

console.log(operate(42, 42, "opposite to"))

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (operate(456, 123, "greater than") === true) score++;
if (operate(654, 654, "less than") === false) score++;
if (operate(99, 3, "equal to") === false) score++;
if (operate(111, 3, "not equal to") ===  true) score++;

if (operate(42, 42, "opposite to") === "Invalid Operation") score++;

console.log("You have scored " + score + "/5 points.");




Highest Product
This problem is worth 7 points.
You may receive partial credit.

 First, create a function called getProduct(nums) which takes a
single array of numbers and returns the product.

Then, write a function highestProduct(numsList) that takes in a 2-dimensional
array of numbers and returns the index of the sub-array with
the highest product value (the value of all of the elements multiplied
together). Hint: You may use the getProduct function as a helper function in
the highestProduct function to solve the problem.


//GAMELPAN
//nest loops?
//helper function

function getProduct(nums) {
 //   let total = [];
    let totalProduct = 0;
    for (let i = 2; i < nums.length; i++) {
         let num = nums[i];
         totalProduct *=  num;
    }
       console.log(totalProduct);
      return totalProduct;

  }

function highestProduct(highestIndex) {
    for (let i = 0; i < highestIndex.length; i++) {
        const highest = highestIndex[i];
        const highProduct = totalProduct + highest;

    }

}





// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

let score = 0;

if (getProduct(arrayA) === 120) score++;
if (getProduct(arrayB) === 21) score++;
if (getProduct(arrayC) === 4000) score++;
if (getProduct(arrayD) === 1800) score++;

if (highestProduct([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestProduct([arrayA, arrayB]) === 0) score++;
if (highestProduct([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
*/
