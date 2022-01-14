"use strict";

// 1. Enhancment
const openingHours = {
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
};

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // 1. No need to write
  //   openingHours : openingHours,

  openingHours, // This will create property of name openingHours and copies the poperties of opningHours at Line : 04

  // 2. Easier literal to write function property
  //   ❌ BEFORE
  //   orderPasta: function (ing1, ing2, ing3) {
  //     console.log(
  //       `You\'re Order of pasta with ${ing1}, ${ing2} and ${ing3} is received!`
  //     );
  //   },

  //   ✅   AFTER
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `You\'re Order of pasta with ${ing1}, ${ing2} and ${ing3} is received!`
    );
  },

  //   3. Now in ES6 we can Compute property names insted of just manually writing it out
  specialDays: {
    [weekdays[5]]: {
      open: "10:00AM",
      close: "1:00PM",
    },
    [`day-${2+4}`]: {
      open: "12:00PM",
      close: "6:00PM",
    },
    [weekdays[2]]: {
      open: "10:00AM",
      close: "3:00PM",
    },
  },
};

// restaurant.orderPasta("x", "y", "z");
console.log(restaurant.specialDays);