const countryInfo = function (country, population, capitalCity) {
  console.log(
    `${country},'has',${population} ,'million people and its capital city is' ,${capitalCity}`
  );
};
const spain = countryInfo("spain", "47", "madrid");
const israel = countryInfo("israel", "8", "jerusalem");
const ejypt = countryInfo("ejypt", "100", "cairo");

console.log(`${spain}, ${israel}, ${ejypt}`);
