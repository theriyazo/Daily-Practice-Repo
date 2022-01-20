"use strict";
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log("B737"[2]);
// Output ⏬
// A
// 3

console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));
// Output ⏬
// 1
// 4
// 8

console.log(airline.indexOf("Portugal"));
// Output ⏬
// 8

// slice()
console.log(airline.slice(4)); // Only with begin parameter
// Output ⏬
// Air Portugal
console.log(airline.slice(4, 4 + 3));
// Output ⏬
// Air

// first word
console.log(airline.slice(0, airline.indexOf(" ")));
// Output ⏬
// TAP

// last word
console.log(airline.slice(airline.lastIndexOf(" ")));
// Output ⏬
// Portugal

// Using negative indexes
console.log(airline.slice(-2)); // last two letters
// Output ⏬
// al
console.log(airline.slice(1, -1));
// Output ⏬
// AP Air Portuga

const checkMiddelSeat = function (seat) {
  // B & E are middel seats
  const seatLetter = seat.slice(-1);
  let isMiddle = "middle";

  isMiddle = seatLetter === "B" || seatLetter === "E" ? isMiddle : "not middle";
  console.log(` ${seat} is ${isMiddle} seat`);
};
checkMiddelSeat("11B");
checkMiddelSeat("23D");
checkMiddelSeat("2E");
// Output ⏬
// 11B is middle seat
// 23D is not middle seat
// 2E is middle seat