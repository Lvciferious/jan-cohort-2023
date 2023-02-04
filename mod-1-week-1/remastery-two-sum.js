/*

Two Sum

Write a function twoSum(arr, target) that accepts an array and a target number as args.
The function should a return a boolean indicating if two distinct numbers of the array add up to the target value.
You can assume that input array contains only unique numbers.

*/

//GAMEPLAN
//non-tech solution:
//look through a group of numbers to see which two can be added to th emxample number.
//If there are any that can be added, the group is good.
//if there are none, then no good.
//tech solution:
//needto define the array
//for loop to iterate through array
//if conditionals
//operation to add numbers
//nested loops for array, I believe
//maybe helper func? no, something else I DUNNO WHAT ELSE TO DO IT'S WEIRD
// your code here


function twoSum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        let targetNumOne = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let targetNumTwo = arr[j];
            if (target === targetNumOne + targetNumTwo) {
                return true;
                }
            }
        }
        return false;
}


console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
