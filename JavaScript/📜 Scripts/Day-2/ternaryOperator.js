

// Ternery (or) Conditional Operator '?'

const age = 21;
age >= 18 ? console.log("Your allowed to vote!"):
console.log("you've to wait another "+(18-age)+" years");

const age = 21;
const eligible = age >= 18 ? 'Yes!' : 'No!';

console.log(eligible);

const age = 21;
console.log(`I'm ${age} years old and I'm ${age >= 18 ? 'Yes!' : 'Not!'} Eligible for Voting`);
