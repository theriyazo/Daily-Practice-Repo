"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [90, 10, 50];
const [a, b, c] = arr;
console.log(a, b, c);

// Skip certain values of the array
let [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

// Swap the variables
// const temp = first;
// first = third;
// third = temp;
// console.log(first, third); // Vegetarian Italian

// By Using Deconstructing
[third, first] = [first, third];
console.log(first, third); // Vegetarian Italian

// multiple variables from returned array
const [starter, main] = restaurant.order(1, 2);
console.log(starter, main); // Bruschetta Risotto

// Destucturing 2d Array
const arr2D = [12, 52, [33, 59, 85]];

// Destructuring inside Destructuring
const [i, , [jx, jy, jz]] = arr2D;
console.log(jx, jy, jz);

// Default values
// const [p, q, r] = [50, 60];
// 50 60 undefined

const [p = -1, q = -1, r = -1] = [50, 60];
//50 60 -1
console.log(p, q, r);
