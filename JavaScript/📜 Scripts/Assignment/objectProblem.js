"use strict";

const arrayObject = [{ value: "a" }, { value: "b" }, { value: "x" }];

const arrayString = ["a", "b", "c", "d", "e"];
// Question Ends here

const output = [];
let index = 0;

// Itterate over the first array and on each array element itterate over the second array
// Inside the second loop, compare if the value in first array is equals to any element in the second array
for (let i = 0; i < arrayString.length; i++) {
  for (let j = 0; j < arrayObject.length; j++) {
    // If the string in the first array is equal to the value of the second array element
    // then push that

    if (arrayString[i] === String(Object.values(arrayObject[j]))) {
      break;
    } else if (j+1 === arrayObject.length) {
      output.push(arrayString[i]);
    } else {
      continue;
    }
  }
}

console.log(output);
// console.log(arrayObject.length);
// console.log(arrayString.length);
