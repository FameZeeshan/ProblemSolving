// Logical program questions based on conditional statements , logical operators and looping:

// 1.	Write a program that checks if a number is positive, negative, or zero, and logs the result to the console using conditional operators.
// let number = prompt("Please enter a number:");

// if (number > 0) {
//   console.log("Number is positive");
// } else if (number < 0) {
//   console.log("Number is negative");
// } else {
//   console.log("Number is Zero");
// }

// 2.	Write a program that takes two numbers as input and checks if they are both even or both odd, and logs the result to the console using logical operators(using ternary operator).
// let num1 = prompt("Type first number: ");
// let num2 = prompt("Type second number: ");
// const result =
//   (num1 % 2 === 0 && num2 % 2 === 0) || (num1 % 2 !== 0 && num2 % 2 !== 0)
//     ? "The numbers are both even or odd"
//     : "The numbers are not both odd or even";
// console.log(result);

// 3.	Write a program that takes a year as input and checks if it's a leap year or not, and logs the result to the console using conditional and logical operators.
// let year = prompt("Enter a year: ");
// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//   console.log(`${year} is a Leap Year`);
// } else {
//   console.log(`${year} is not a Leap Year`);
// }

// 4.	write a program to find the largest of three numbers?
// let num1 = 10;
// let num2 = 50;
// let num3 = 30;
// let largestNumber = num1;
// if (num2 > largestNumber) {
//   largestNumber = num2;
// }
// if (num3 > largestNumber) {
//   largestNumber = num3;
// }
// console.log(`${largestNumber} is the largest number`);
// 5.	Write a program that takes two numbers as input and determines if their sum is even.
// let num1 = prompt("Write first number: ");
// let num2 = prompt("Write second number: ");
// const sum = Number(num1) + Number(num2);
// if (sum % 2 === 0) {
//   console.log(`The sum of ${num1} and ${num2} is even`);
// } else {
//   console.log(`The sum of ${num1} and ${num2} is odd`);
// }
// 6.	Write a program that takes a number as input and determines if it is a multiple of 3 and 5.
// let number = prompt("Write a number: ");
// const num = Number(number);
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log(`${num} is a multiple of 3 and 5`);
// } else {
//   console.log(`${num} is not a multiple of 3 and 5`);
// }
// 7.	Write a program that takes three numbers as input and determines if they are all odd or all even(using ternary operator).
// let num1 = prompt("Type first number: ");
// let num2 = prompt("Type second number: ");
// let num3 = prompt("Type third number: ");
// const allEvenOrOdd =
//   num1 % 2 === num2 % 2 && num2 % 2 === num3 % 2 ? true : false;
// if (allEvenOrOdd) {
//   console.log(`${num1}, ${num2}, and ${num3} are all even or all odd`);
// } else {
//   console.log(`${num1}, ${num2}, and ${num3} are not all even or all odd`);
// }

// 8.	Write a program that takes a number as input and returns "Skill" if it is a multiple of 3, "Safari" if it is a multiple of 5, and "Skill safari" if it is a multiple of both 3 and 5.
// let number = Number(prompt("Enter a number: "));
// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("Skill Safari");
// } else if (number % 3 === 0) {
//   console.log("Skill");
// } else if (number % 5 === 0) {
//   console.log("Safari");
// } else {
//   console.log(`The number ${number} is not a multiple of both 3 and 5`);
// }
// 9.	Write a program that takes three numbers as input and determines if they form a Pythagorean triplet.
// Pythagoras formula is a^2+b^2=c^2
// let num1 = Number(prompt("Type first number: "));
// let num2 = Number(prompt("Type second number: "));
// let num3 = Number(prompt("Type third number: "));
// const isPythagoras =
//   num1 * num1 + num2 * num2 === num3 * num3 ||
//   num2 * num2 + num3 * num3 === num1 * num1 ||
//   num3 * num3 + num1 * num1 === num2 * num2
//     ? true
//     : false;
// if (isPythagoras) {
//   console.log(`${num1} ,${num2} and ${num3} forms a Pythagoras triplet`);
// } else {
//   console.log(
//     `${num1} ,${num2} and ${num3} does not forms a Pythagoras triplet`
//   );
//   console.log;
// }
// 10.	Write a program that takes two integers as input and outputs whether the two integers have the same sign using a conditional statement and logical operators.
// let num1 = parseInt(prompt("Type first number: "));
// let num2 = parseInt(prompt("Type second number: "));
// if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
//   console.log(`${num1} and ${num2} has same Signs`);
// } else {
//   console.log(`${num1} and ${num2} has different Signs`);
// }

// 11.	Write a program that takes three integers as input and outputs whether the three integers can form a valid triangle using a conditional statement and logical operators.

// ------ Function Method-----------
// const checkForTriangle = function (num1, num2, num3) {
//   if (num1 + num2 >= num3 && num2 + num3 >= num1 && num3 + num1 >= num2) {
//     console.log("Its a triangle");
//   } else {
//     console.log("Its not a triangle");
//   }
// };
// checkForTriangle(1, 2, 3);
// -----------Input Method--------
// let num1 = parseInt(prompt("Type first Integer: "));
// let num2 = parseInt(prompt("Type second Integer: "));
// let num3 = parseInt(prompt("Type third Integer: "));
// if (num1 + num2 >= num3 && num2 + num3 >= num1 && num3 + num1 >= num2) {
//   console.log("Its a triangle");
// } else {
//   console.log("Its not a triangle");
// }

// 12.	Write a program that takes two numbers as input and returns their greatest common divisor (GCD).
// let num1 = parseInt(prompt("Enter first number: "));
// let num2 = parseInt(prompt("Enter second number: "));
// function gcd(num1, num2) {
//   if (num2 === 0) {
//     return num1;
//   } else {
//     return gcd(num2, num1 % num2);
//   }
// }
// let result = gcd(num1, num2);
// console.log(
//   "The greatest common divisor of " +
//     num1 +
//     " and " +
//     num2 +
//     " is " +
//     result +
//     "."
// );

// 13.	Write a program that takes a number as input and returns a boolean indicating if it is a perfect square.

// function isPerfectSquare(num) {
//   let i = 1;
//   while (i * i <= num) {
//     if (i * i === num) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }
// let num = parseInt(prompt("Enter a Number: "));
// if (isPerfectSquare(num)) {
//   console.log("Its a perfect square");
// } else {
//   console.log("Its not a perfect square");
// }

// 14.	Write a program that takes two numbers as input and returns their greatest common divisor (GCD).
// let num1 = parseInt(prompt("Enter first number: "));
// let num2 = parseInt(prompt("Enter second number: "));
// function gcd(num1, num2) {
//   if (num2 === 0) {
//     return num1;
//   } else {
//     return gcd(num2, num1 % num2);
//   }
// }
// let result = gcd(num1, num2);
// console.log(
//   "The greatest common divisor of " +
//     num1 +
//     " and " +
//     num2 +
//     " is " +
//     result +
//     "."
// );

// 15.	Write a program to find power of number using given number and power( 43).
let base = prompt("Enter a base number: ");
let exponent = prompt("Enter an exponent ");
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}
let result = power(base, exponent);
console.log(result);
// 16.	Write a program that calculates the factorial of a non-negative integer.

// 17.	Write a program that calculates the Fibonacci sequence up to a specified number of terms.

// 18.	Write a program that checks if a given integer is prime

// 19.	Write a program in JavaScript that uses a for loop to iterate over the given input and print "Skill" for numbers that are divisible by 3, "Safari" for numbers that are divisible by 5, and "Skill safari" for numbers that are divisible by both 3 and 5.

// 20.	Write a program in JavaScript that uses nested for loops to print out a multiplication table for the numbers from 1 to 3 from that print

// 21.	Write a JavaScript program to construct the following pattern using nested for loop.

// 22.	Write a Program to count the number of digits in 2023.

// 23.	Write a Program to check if a number is a palindrome

// 24.	Write a program that takes a string and returns a new string with all the vowels removed.

// 25.	Write a program that takes a string and returns the longest word in the string.
// 26.	Write a program to reverse a sentence word by word.

// 27.	Write a programme that convert each word's first letter to uppercase.

// 28.	Write a javascript program to construct the following number pattern using nested for loop.
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19
// 20 21 22
// 23 24
// 25

// 29.	Write a Program to determine the day of the week based on its number(using switch statement):

// 30.	Write a javascript program to construct the following number pattern using nested for loop.

// 1
// 3 2
// 6 5 4
// 10 9 8 7
// 15 14 13 12 11
