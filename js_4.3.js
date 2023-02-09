function avg(score1, score2, score3) {
  let res = (score1 + score2 + score3) / 3;
  return res;
}
const JohnsTeam = avg(89, 120, 103);
const MikeTeam = avg(116, 94, 123);
// const Mary = avg(97, 134, 105);
if (JohnsTeam > MikeTeam) {
  console.log(`The winner is  John's Team`);
} else if (JohnsTeam == MikeTeam) {
  console.log(`There is no winner DRAW`);
} else console.log(`The winner is  Mike's Team`);
