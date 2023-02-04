/*

Min Value

Write a function minValue(nums) that takes in an array of numbers as an arg.
The function should return the smallest number of the array.
If the array is empty, the function should return null.

*/
//GAMEPLAN
//non-tech solution:
//lok thrrough group of numbers to determine which is the smallest. Do nothing if there is nothing
//tech solution:
//for loop if condish OTP
//define array
//return smallest num
//return null if empty array

// your code here


function minValue(nums) {
    let min = null; //reps empty array, the lowest value

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (min === null || num < min) //all statements ring true
        min = num;
    }
    return min; //returns smallest num. no need for false
}





console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
