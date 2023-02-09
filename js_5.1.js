function countryToLiveIn(language, isIsland, population, country) {
  if ((language = "english" && isIsland == true && population <= 50)) {
    console.log(`'You should live in Finland`);
  } else {
    console.log("Finland does not meet your criteria");
  }
}

countryToLiveIn("hebrew", false, 67, "Finland");
