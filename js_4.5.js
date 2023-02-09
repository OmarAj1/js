function printNumbers(year) {
  if (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 100 == 0 && year % 400 == 0)
  ) {
    console.log(`It is indeed a leap year`);
  } else console.log("This is not a leap year.");
}
//printNumbers (2400); it is
// printNumbers(2000); it is
// printNumbers(1800); it isnt
