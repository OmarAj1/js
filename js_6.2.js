const people1 = ["Greg", "Mary", "Devon", "James"];
// q1
for (let i = 0; i <= people.length - 1; i++) {
    console.log(`${people[i]}`);
}
//q2
people1.slice(0, 1)
    //q3 
people1.pop()
    //q4
people1.unshift("Matt");
//q5 
people1.push("omar");
//q6 
for (let i = 0; i <= people.length - 1; i++) {
    if (i === 1) {
        console.log(`${people[i]}`);
        break;
    }
}
//q7 
const people2 = people1.slice(2, people1.length);
// q8 
people1.indexOf('Mary')
    //q9 
people1.indexOf('Foo')
    //q10
let people3 = ["Greg", "Mary", "Devon", "James"];
people3.splice(2, 1, "Elizabeth");
console.log(people3);
//q11

const bob = ['bob'];
const newbob = people3.concat(bob);
console.log(newbob);