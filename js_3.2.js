// From function declarations to explicit and implicit return functions(one of each).
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
//explicit
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
//implicit
const welcome = () => "Welcome to Appleseeds Bootcamp!";

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
//explicit
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
//implicit
let power = (a) => Math.pow(a, 2);

// From function expressions to   iife  .
const squareRoot = (a) => Math.sqrt(a);
(function squareRoot(a) {
  console.log(`hi  ${Math.sqrt(a)}`);
})(49);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;
(function randomNumbers(a, b) {
  console.log(`${Math.random() * (a - b) + b}`);
})(1, 2);
