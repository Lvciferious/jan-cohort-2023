/*

Two Dimensional Sum

Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.

*/

//GAMEPLAN
//non-tech solution:
//take group of nums inside of anther group of nums, add nums, and give nums sums
//tech-solution:
//2d array (nested loops snug as a bug in a jug on a rug)
//for loop x if conditional OTP (had to separate th OTP for this one-for loop only)
//operation for maths-ing (kinda sorta instead of an if xxx === xxx1 + xxx2, only needed xxx += xxx inside the for loop)
//return sum of all numbers

// your code here

function twoDimensionalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrJ = arr[i];
        for (let j = 0; j < arrJ.length; j++) {
        sum += arrJ[j]; //don't need to add a 'return' here, only outside of the loop! That's why you were getting '1/3' before instead of '19/6'
    }
}
return sum;
}



let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
