/*

Vowel Counter

Write a function, countVowels(word), that takes in a string word
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".

*/

//GAME PLAN
//need for loop to iterate
//might need a helper function but not sure
// .includes() !!!! (check whether there are vowels)
//count vowels
//return number of vowels in the console.log

//

function countVowels(word) {
    let vowelCounter = 0;
    let i = 0;

    while (i < word.length) {
        let letter = word[i];
        if (letter === 'a' ||
            letter === 'e' ||
            letter === 'i' ||
            letter === 'o' ||
            letter === 'u') {
        vowelCounter += 1;
            }
        i++;
    }
    return vowelCounter;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
console.log(countVowels("xxx")); // 0
