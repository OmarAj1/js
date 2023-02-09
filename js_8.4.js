function countLetters(arr) { let letterCount = {}; for (const word of arr.map(word => word.toLowerCase())) { for (const letter of word) { letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1 : 1; } } return letterCount; }
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
console.log(countLetters(array));