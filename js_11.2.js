// q1
function doubleValues(arr) {
  return arr.map((dbld) => dbld * 2);
}
console.log(doubleValues([1, 4, 6, 2, 1, 5, 7, 8, 1])); //[2, 8, 12, 4, 2, 10, 14, 16, 2]
// q2
function onlyEvenValues(arr) {
  return arr.filter((evn) => evn % 2 === 0);
}
console.log(onlyEvenValues([11, 22, 2, 3, 4, 6, 1])); //[22, 2, 4, 6]
// q3
function showFirstAndLast(arr) {
  if (typeof arr[0] === "string" && typeof arr[arr.length - 1] === "string")
    return [arr[0], arr[arr.length - 1]];
  else return [];
}
console.log(showFirstAndLast(["h", "e", "l", "l", "o"])); //['h', 'o']
// q4
const vowelCount = (str) =>
  [...str.toLowerCase()].reduce((acc, char) => {
    if ("aeiou".includes(char)) acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});
console.log(vowelCount("good morning")); //  i: 1, o: 3

// q5
const capitalize = (str) => str.toUpperCase();
console.log(capitalize("hello world!"));

//q6

const shift_letters = function (text) {
  let str = text.split("");
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case " ":
        break;
      case "z":
        str[i] = "a";
      case "Z":
        str[i] = "Z";
      default:
        str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
  }
  return str.join(`\n`);
};
console.log(shift_letters("abc"));
// q7
const swapCase = (str) =>
  str
    .split(" ")
    .map((word, index) =>
      index % 2 === 0 ? word.toUpperCase() : word.toLowerCase()
    )
    .join(" ");
console.log(swapCase("hello world!"));
