"use strict";

// split()
// split with string parameter will split the string at where the passed split parameter occuer
// and stores the splited string in an array
console.log("a+very+nice+starting".split("+"));
// Output ⏬
// (4) ['a', 'very', 'nice', 'starting']
console.log("RiyazAhamad Hosalli".split(" "));
// (2) ['RiyazAhamad', 'Hosalli']

const [firstName, lastName] = "RiyazAhamad Hosalli".split(" ");
console.log("Your first name is: " + firstName);
console.log("Your last name is: " + lastName);
// Your first name is: RiyazAhamad
// Your last name is: Hosalli

// Join
let greating = ["Mr.", firstName, lastName.toUpperCase()];
greating = greating.join(" ");
console.log("Good Morning!, " + greating);
// Good Morning!, Mr. RiyazAhamad HOSALLI

// Example
function capitalizeName(name) {
  const names = name.split(" ");
  let capitalizeNames = [];

  for (const n of names) {
    // capitalizeNames.push(n[0].toUpperCase() + n.slice(1));
    capitalizeNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(capitalizeNames.join(" "));
}
capitalizeName("jessica ann smith davis");
capitalizeName("jonas avenger");
capitalizeName("capitan america");
// Jessica Ann Smith Davis
// Jonas Avenger
// Capitan America

// Padding
//  adds number of string umtil certain length
const message = "Go to gate 23";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("ABC".padStart(25, "+").padEnd(30, "+"));
// +++++++Go to gate 23++++++++++
// ++++++++++++++++++++++ABC+++++

// Example
const maskCreditCard = function (number) {
  const maskedNum = number + "";
  const last4Digit = maskedNum.slice(-4);

  return last4Digit.padStart(maskedNum.length, "*");
};
console.log(maskCreditCard(51616549));
console.log(maskCreditCard(565162561646));
console.log(maskCreditCard(4852252251225841));
// ****6549
// ********1646
// ************5841

// Repeat
const message2 = `Bad waether... All Departues Delayed... \n`;
console.log(message2.repeat(5));
// Bad waether... All Departues Delayed...
// Bad waether... All Departues Delayed...
// Bad waether... All Departues Delayed...
// Bad waether... All Departues Delayed...
// Bad waether... All Departues Delayed...

// Example
function planesInTheLine(n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)} `);
}
planesInTheLine(4);
planesInTheLine(7);
planesInTheLine(2);
// There are 4 planes in line ✈️✈️✈️✈️
// There are 10 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
// There are 7 planes in line ✈️✈️✈️✈️✈️✈️✈️
