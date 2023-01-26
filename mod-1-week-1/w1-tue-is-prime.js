/*

Is Prime

Define a function isPrime(number) that returns true if number is prime.
Otherwise, false. A number is prime if it is only divisible by 1 and itself.

*/

//GAMEPLAN
//non-tech solution
//determine if the number is prime
//if it yes, then true
//if no, then false
//tech translation
//conditional to answer yes or no
//code used to parse out a prime num
//try for loop

function isPrime(number) {
    if (number < 2) return false;

   for (let i = 2; i < number; i++) {
       if (number % i === 0) return false;
    }
    return true;
}


console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
