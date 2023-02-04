/*

Remove Last Vowel

Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

*/

//GAMEPLAN
//non-tech solution:
//look to the end of given word and take out the last vowel of the word
//new word sans one vowel
//tech solution:
//for loop if condish OTP
//.pop() ??? NO NO NO IT WAS A HEADACHE WAITING TO HAPPEN
// .split() ??? NO GO AWAY
//.includes() ??? yes
//helper func??????
//if not split maybe .slice()???? YES SLICE FFFFFFFF-

// your code here

function removeLastVowel(word) { //HOLY CANOLA OIL HOW COULD YOU FORGET THE 'FUNCTION' AT THE BEGINNING IT'S LITERALLY THE ONE THING YOU HAVE TO DO FOR FUNC SYNTAX EXPR TO ACTUALLY WORK WHAT IS UP WITH YOU RN
    let vowel = 'aiueo';

    for (let i = word.length - 1; i >= 0; i--) { //I love decrementing it's like unlocking a hidden loop superpower
        let letter = word[i];
        if (vowel.includes(letter)) {
        return word.slice(0, i) + word.slice(i + 1); //REMEMBER THE '+' COMMAS ARE THE SPAWN OF SATEEN THAT'S HOW YOU GOT IN TROUBLE THE LAST TIME(S)
        }
    }
    return word;
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy' LOL
