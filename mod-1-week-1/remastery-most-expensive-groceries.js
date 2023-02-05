/*

Most Expensive Groceries REPL
You are compiling a price checker for a grocery store. The grocery prices are as follows:


butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5


First, create a function called costOfGroceries(groceries) which takes a single array of grocery items and returns the total cost.


Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items and returns
the index of the sub-array with the highest cost.


This problem is worth 7 points. It is possible to get partial points on this problem.

*/

//GAMEPLAN
//non-tech solution:
//look at the grocery lists and add the total cost for each list
//compare each list's total cost annd determine which list is the most expensive
//tech solution:
//helper function, starting with the first half
//write helper function to iterate through each array and sum the cost of all lists
//take first array and use it to return the array of the highest cost
//for loop x if condish OTP for helper function
//...for loop all the way for the second half be real
//make sure there's no repeating in the second function



// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

function costOfGroceries(groceries){
  let total = 0;
  for (let i = 0; i < groceries.length; i++) {
      let grocery = groceries[i];
      if (grocery === 'butter') {
        total += 1
        }
      if(grocery === 'eggs') {
          total += 2
        }
      if(grocery === 'milk') {
        total += 3
        }
      if(grocery === 'bread') {
        total += 4
        }
      if(grocery === 'cheese') {
        total += 5
        }
  } //console.log(total);
    return total;
}


function mostExpensiveGroceries(groceriesList) {
  let highest = -Infinity;
  let highestIndex = 0;

  for(let i = 0; i < groceriesList.length; i++) {
      let groceryList = groceriesList[i];
      let costOfList = costOfGroceries(groceryList);
      if (costOfList > highest) {
        highest = costOfList;
        highestIndex = i
         }
      }
  console.log(highestIndex);
  return highestIndex;
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
