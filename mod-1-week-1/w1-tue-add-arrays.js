/*

Add Arrays
Write a function combineArray(array1, array2)
that takes in two arrays of numbers and returns
the two arrays combined into a single array.

Hint: Use the Array.concat method but be aware
that calling this method won't permanently change,
also known as mutate, either array.

*/

//GAMEPLAN
//how would I solve this in a non-technical way?
//take arrays 1 and 2, and mash them together!
//then return the result
//.concat for sure
//for loop not necessary
//conditional not necessary


function combineArray(array1, array2) {
    let newArray = array1.concat(array2);
    return newArray;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]
