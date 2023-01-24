/*

Average of Two
 Write a function averageOfTwo(num1, num2) that returns the
average of two numbers.

*/

function averageOfTwo(num1, num2) {
    let sum = num1 + num2;
    let average = sum / 2;
    console.log(average);
    return average;
  }

averageOfTwo(3, 7); // 5
averageOfTwo(16, 5); // 10.5
averageOfTwo(2, 7.5); // 4.75

/*
  console.log(averageOfTwo(3, 7)); // => 5
  console.log(averageOfTwo(16, 5)); // => 10.5
  console.log(averageOfTwo(2, 7.5)); // => 4.75
*/
