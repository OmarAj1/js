let numSibilings = prompt("How many siblings do you have?");
if (numSibilings == 1) {
  console.log("1 sibling!");
} else if (numSibilings >= 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No sibilings!");
}

//6-  with 3= what happens is this condition  if (numSibilings ===1 ) cant be done because they have diffrent types
//7-  with string will have No sibilings because the else block prevent any other type but string
//8-  because it stricts any other types from being inputted and thats on its role of preventing conflicts
