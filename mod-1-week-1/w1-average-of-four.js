/*

Average of Four
Write a function averageOfFour(num1, num2, num3, num4) that takes in four numbers.
The function should return the average of all of the numbers.

*/

function averageOfFour(num1, num2, num3, num4) {
    const sum = num1 + num2 + num3 + num4;
    let average = sum / 4;
    console.log(average);
    return average;
}

averageOfFour(10, 10, 15, 5); // 10
averageOfFour(3, 10, 11, 4); // 7
averageOfFour(1, 2, 3, 4); // 2.5
