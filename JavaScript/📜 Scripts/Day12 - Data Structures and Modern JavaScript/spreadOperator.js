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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `You\'re Order of pasta with ${ing1}, ${ing2} and ${ing3} is received!`
    );
  },
};

// The Spread Operator -> takes out all the elements of an array
// the spread operator works on only iterables(strings, arrays, maps, sets) NOT objects

const arr = [1, 4, 5, 8];
console.log(...arr); // 1 4 5 8

const newArr = [9, 10, ...arr];
console.log(newArr); // (6) [9, 10, 1, 4, 5, 8]

const newMenu = [...restaurant.mainMenu, "Butter Chicken"];
console.log(newMenu); // (4) ['Pizza', 'Pasta', 'Risotto', 'Butter Chicken']

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu); //(7) ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Spread Operator on Strings
const myName = "RiyazAhamad";
const lettersInMyName = [...myName];
console.log(lettersInMyName); //(11) ['R', 'i', 'y', 'a', 'z', 'A', 'h', 'a', 'm', 'a', 'd']

const ingridents = [
  prompt("Ingreadent 1?"),
  prompt("Ingreadent 2?"),
  prompt("Ingreadent 3?"),
];
restaurant.orderPasta(...ingridents); // You're Order of pasta with chease, Egg and Salt is received!

