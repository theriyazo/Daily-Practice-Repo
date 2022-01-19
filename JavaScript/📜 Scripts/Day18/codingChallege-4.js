"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Examples
// this_isoneexample
//  this_second
// this_last

const splitText = function (item) {
  const splits = item.split("\n");
  return splits;
};
// Initializing variables

let firstLetter = "";
let count = 0;
//   MySolution

const fixCaps = function (array) {
  // Function to delete '_' and replace the next letter to '_' with the capitalized letter of the same
  for (const row of array) {
    //   Accessing every string and fixing capitalization
    let [first, second] = row.toLowerCase().trim().split("_");
    firstLetter = second.slice(0, 1);
    second = second.replace(firstLetter, firstLetter.toUpperCase());
    array[count] = first + second;
    count++;
  }
  return array;
};

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  //   MySolution
  //   const fixedVariableNames = fixCaps(splitText(text));
  //   for (const elem of fixedVariableNames) {
  //     console.log(elem);
  //   }

  const rows = splitText(text);
  for (const [index, row] of rows.entries()) {
    let [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(index+1)}`);
  }
});
