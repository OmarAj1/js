const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DayNames = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const date = new Date();
const today = DayNames[date.getDay()];
const month = monthNames[date.getMonth()];
const year = date.getUTCFullYear();
const date2 = date.getUTCDate();

console.log(`Today is ${today} the ${date2} of ${month} ${year}`);
