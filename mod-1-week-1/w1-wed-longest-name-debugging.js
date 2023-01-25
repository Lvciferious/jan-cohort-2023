/*

Longest Name - Debugging (*)
The function `longestName() takes an array of names and returns the longest.
If there's a tie, it returns the first name of the longest length.
However, this implementation is full of bugs! Use your debugging skills to find and fix those bugs.

*/

function longestName(names) {
    console.log("START");
    // Set the first name to be the longest
    let currentLongest = names[0];

    // Check each other name in the array starting from the second
    for (let i = 1 ; i < names.length ; i++) {
        console.log(names[i]);
        // If the name we're checking is longer than our
        // current longest, set that name to be the new longest
        if (names[i].length > currentLongest.length) {
            currentLongest = names[i];
        }

    }
    console.log("STOP");
    return currentLongest;
}

testNames = ["James"]

console.log(longestName(testNames)); // "Christopher"
