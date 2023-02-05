/*

HelloThere

Write a function helloThere that takes in ages as args and determines who is the oldest, and who is the youngest.
Return greetings based on the age. You can choose what the greetings say.
*/

//non-tech solution:
//look at the ages of people and adress them based on who is the oldest and who is the youngest
//tech solution:
//for x if OTP (decided to split up the OTP and stick with if condish)
//console log return response based on age
//operation to determine age (if xxx >= xxx return xxx, if xxx <= xxx return xxx)


function helloThere(age) {
    if (age >= 50 && age <= 100) return 'greeting, sensei!';
    if (age <= 25 && age <= 40) return 'hello, young padawan!'
    if (age >= 1000 & age <= 9000) return '...are you a wizard'
    if (age >= 9001) return "IT'S OVER 9000!?!!?!"
    else return 'hi ted';
}

console.log(helloThere(21)); // 'hello, young padawan!'
console.log(helloThere(2500)); // '...are you a wizard'
console.log(helloThere(65)); // 'greeting, sensei!'
console.log(helloThere(45)); // 'hi ted'
console.log(helloThere(9999)); // "IT'S OVER 9000!?!!?!"
