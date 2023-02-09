function getGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
      break;
    case score >= 80:
      return "B";
      break;
    case score >= 70:
      return "C";
      break;
    case score >= 65:
      return "D";
      break;
    default:
      return "F";
  }
}
console.log(getGrade(100));
