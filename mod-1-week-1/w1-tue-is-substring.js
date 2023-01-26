/*

Is Substring

In JavaScript the String.indexOf() method allows you to get
the index of a value within an Array-like structure, including strings.

Write a function isSubstring that takes in two strings, searchString and subString.
The function should return true if subString is a part of thesearchString,
regardless of upper or lower case, and false if otherwise.

*/


//GAMEPLAN
//how would I solve this in a non-tech way?
//I would look through the string and parse out if the substring is present.
//If it is, I would say yes, this is true.
//If it isn't I would say no, this is false.
//Capitalisation  or lack thereof does not matter

//We need a conditional
//string.includes to determine what's inside the string
//.toLowerCase() to get around the capitalisation issue
//return the result


function isSubstring(searchString, subString) {
    if (searchString.toLowerCase().includes(subString)) return true;
    return false;
  }

  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
