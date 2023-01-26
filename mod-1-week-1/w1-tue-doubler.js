/*

Doubler
Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.

*/

//GAMEPLAN
//How would I solve this in a non-technical way?
//I would take every number in the array and multiple it by 2
//(not adding the num togther, just doubling each num)
//then present the new array
//How can this be translated into a technical solutions?
//use a for loop to iterate through the give array
//double the iteration by two
//return the mutated array

function doubler(arrayNum) {

    let doubleArr = [];
    let i = 0;

    while (i < arrayNum.length) {
        let oldArr = arrayNum[i];
        let newArr = oldArr * 2;
        doubleArr = doubleArr.concat(newArr);

        i += 1;
    }
    return doubleArr;
}


console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]



function doubler(arrayNum) {
    let doubleArr = [];

    for (let i = 0; i < arrayNum.length; i += 1) {
        let oldArr = arrayNum[i];
        let newArr = oldArr * 2;
        doubleArr = doubleArr.concat(newArr);

    }
    return doubleArr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
