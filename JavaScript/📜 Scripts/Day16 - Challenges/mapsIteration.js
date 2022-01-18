"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const question = new Map([
  ["question", "Whats the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  [true, "Correct!"],
  [false, "Try Again."],
  ["correct", 3],
]);
console.log(question);

// To convert Objects to map

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);
// Output ⏬ 
// Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}

// Quiz app
console.log(question.get("question"));
// Output ⏬ 
// Whats the best programming language?

// For loop
for (const [key, value] of question) {
  if (key === Number(key)) {
    console.log(key + ": " + value);
  }
}
// Output ⏬ 
// Whats the best programming language?
// 1: C
// 2: Java
// 3: JavaScript


const answer = 3;
question.get('correct') === answer ? console.log(question.get(true)) : console.log(question.get(false));
// Output ⏬ 
// Correct!

// Converting map to array
console.log([...question]);
// Output ⏬ 
// (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// Map methods
console.log(question.entries());
console.log(question.has('correct'));
console.log([...question.keys()]);
console.log([...question.values()]);
// Output ⏬ 
// MapIterator {'question' => 'Whats the best programming language?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', true => 'Correct!', …}
// true
// (7) ['question', 1, 2, 3, true, false, 'correct']
// (7) ['Whats the best programming language?', 'C', 'Java', 'JavaScript', 'Correct!', 'Try Again.', 3]