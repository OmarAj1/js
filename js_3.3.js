const wpop = 7900;
//decleration
function percentageOfWorld1(pop, wpop) {
  let res = (pop / wpop) * 100;
  return res;
}
//expression
const percentageOfWorld2 = (pop) => (pop / wpop) * 100;

const spain = percentageOfWorld2(300);
const china = percentageOfWorld2(500);
const seudiarabia = percentageOfWorld2(1200);

console.log(`spain is ${spain} % percentage of the whole pop`);
console.log(`china is ${china} % percentage of the whole pop`);
console.log(`eudiarabia is ${seudiarabia} % percentage of the whole pop`);
