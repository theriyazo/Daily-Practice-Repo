"use strict";

// Initialization
const N = Number(prompt("Enter Years"));
let interest = 0;
let num = 0;
let cycle = N;

while (cycle > 0) {
  if (cycle <= 7) {
    // If cycle or N is less than 7 years
    for (let i = 1; i <= cycle; i++) {
      num += i + interest;
    }
  } else {
    // If cycle or N is More than 7 years
    // add each year interest and for every cycle add 1 to it.
    for (let i = 1; i <= 7; i++) {
      num += i + interest;
    }
  }
  //   For Every Cycle interest increases by 1
  interest++;
  cycle -= 7;
}

console.log(num);
