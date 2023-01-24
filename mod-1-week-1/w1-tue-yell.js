/*

Yell (*)
Write a function yell that takes in a string and returns a "yelled" version of that string.

HINT: try using the .toUpperCase() function on a string to see what it does!

*/

function yell(str) {
    let yeller = str.toUpperCase() + '!!!';
    console.log(yeller);
    return yeller;
  }

  yell('I want to go to the store');
  yell('Time to program');
