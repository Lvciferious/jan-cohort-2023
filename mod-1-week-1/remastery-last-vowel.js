/*

Last Vowel

Write a function lastVowel(str) that takes in a string and returns the last vowel
that appears sequentially in the string. Note that the string may contain capitalization.

Hint: You may find the String.toLowerCase or String.toUpperCase methods useful

*/

//GAMEPLAN
//non-tech solution:
//look through each letter of each word and point out the last sequential vowel.
//'y' does not count (['=), it's an invalid option.
//Tech solution:
//Use a for loop to iterate through a word.
//use .includes() to target vowels
//declare and assign a variable for the vowels
//if conditional to link with .includes()
//return last vowel of word
//if .includes doesnt work, stick w/ if and for. (IT WORKED NO NEED WHOO)
//make sure function skips over the other vowels to get to the LAST vowel!
//try a nested loop! NESTED LOOP LEAD ME IN A LOOP IT WAS A CODING RED HERRING

// your code here

function lastVowel(str) {
    const vowel = 'aiueo';
    // console.log(str);
     for (let i = str.length - 1; i >= 0; i--) {
         const letter = str[i];
         if (vowel.includes(letter.toLowerCase())) { //WATCH FOR PLACEMENT MISTAKES! The code wasn't working the first b/c you typed 'str.toLowerCase(), instead of letter.toLowerCase()!
         return letter;
         }
    }
    return null;
 }



 console.log(lastVowel('battery')); // 'e'
 console.log(lastVowel('TUNNEL')); // 'E'
 console.log(lastVowel('dog')); // 'o'
 console.log(lastVowel('conventional')); // 'a'
 console.log(lastVowel('rhythm')); // null
