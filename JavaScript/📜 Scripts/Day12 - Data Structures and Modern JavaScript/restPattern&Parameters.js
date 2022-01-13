"use strict";

// SPREAD, On the RIGHT side of =
const arr = [1, 2, 3, ...[3, 4]];

// REST, On the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `You\'re Order of pasta with ${ing1}, ${ing2} and ${ing3} is received!`
    );
  },
};

// Using both REST & SPREAD
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST on objects
const {thu, ...weekDays} = restaurant.openingHours;
console.log(thu, weekDays); // {open: 12, close: 22}close: 22open: 12[[Prototype]]: Object {fri: {…}, sat: {…}}

// REST on Functions
const add = function(...numbers){
    let sum = 0;
    console.log(numbers);
    numbers.forEach(element => {
        sum = sum + element;
    });
    console.log(sum);
};

add(1,2);
add(1,2, 6);
add(1,2, 5, 10, 54);

// (2) [1, 2]
// (3) [1, 2, 6]
// (5) [1, 2, 5, 10, 54]

