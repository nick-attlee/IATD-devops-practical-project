import readlineSync from 'readline-sync';

console.log("Hello World!");

const text = readlineSync.question("Please enter a number: ");

const num = parseInt(text);

console.log("The square root of your number is: " + Math.sqrt(num));