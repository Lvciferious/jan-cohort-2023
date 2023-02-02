/*

Is Prime

 Define a function isPrime(number) that returns true if number is prime.
 Otherwise, false. A number is prime if it is only divisible by 1 and itself.

*/

//GAMEPLAN
//non-tech solution:
//look at a number to decide if it is prime. If it is, rings true.
//If it isn't, rings false
//Tech solution:
//a loop is needed (going with for loop)
//if conditional is needed
//operation must be tied in with conditional
//return true if prime, return false if not
//it can't just be an odd num. It must be prime.
//edgecase of 1.

function isPrime(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) { //remember to leave .length out, since we're iterating numbers, not a string or array
        if ( number % i === 0) return false;
    }
    return true;
}


console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
