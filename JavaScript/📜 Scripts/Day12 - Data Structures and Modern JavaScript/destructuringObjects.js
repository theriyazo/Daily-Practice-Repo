"use strict";

const restaurant = {
  names: "Classico Italiano",
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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be devliverd to '${address}' at ${time}`
    );
  },
};

// Destructuring Objects
const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// What if we want variable names different from the property name
const { names: title, openingHours: hours, categories: tags } = restaurant;
console.log(title, hours, tags);
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values
const { menu = -1, starterMenu: starters = -1 } = restaurant;
console.log(menu, starters);
// -1 (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 101;
let b = 102;
const obj = { a: 30, b: 54, c: 64 };
// console.log(a, b); // 101 102

({ a, b } = obj);
console.log(a, b); // 30 54

// Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

const {
  fri: { open: o = "NoValue", close: c = "NoValue", join: j = "NoValue" },
} = restaurant.openingHours;
console.log(o, c, j);
// 11 23 'NoValue'

// Destructuring arguments of the objects
restaurant.orderDelivery({
  time: "1:00PM",
  address: "House No #213, Shin Chan",
  mainIndex: 1,
  starterIndex: 2,
});
// Order received! Garlic Bread and Pasta will be delivered to 'House No #213, Shin Chan' at 1:00PM