/*

Sum Array
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

*/

//GAMEPLAN
///How would I solve this as a non-machine?
//I would look at the all the numbers inside the array, add them together and provide the result
//How can that be translated into codng?
//maybe a for loop to iterate through the numbers
//write an adding function to sum all numbers together
//return the sum of the numbers in the array (EEYYYYYYY)


function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i+= 1) {
        let num = array[i];
        sum += num;
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
