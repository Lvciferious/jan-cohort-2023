/*

Pig Latin - Slice Research

Pig Latin is a fun take on the English language where you move any
consonant cluster from the start of the word to the end of the word;
when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string
and translates the word into Pig Latin.
For this problem use the String's .slice() method.
The .slice() method extracts a section of a string and returns it as a string.

Hint: Remember the String.includes method!

*/

function pigLatin(word) {
    let vowels = 'aeiou'
    let consonants = 'bcdfghjklmnpqrstvwxyz'
    if (vowels.includes(word[0])) {
    return word + 'yay';
    }
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (vowels.includes(letter)) {
            let firstPart = word.slice(1);
            let secondPart = word.slice(0, i);
            return firstPart + secondPart + 'ay';
        }

    }
}

console.log(pigLatin('unicorn')); // 'unicornyay'
console.log(pigLatin('pegasus')); // 'egasuspay'
console.log(pigLatin('biggledick')); // 'iggledickbay
console.log(pigLatin('andromeda')); //andromedayay
console.log(pigLatin('yellow')); // 'ellowyay'
console.log(pigLatin('ysgamur')); // shoud print 'sgamuryay' but instead prints 'sgamurysgay'. Congrats, you found an edgecase!
