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

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// For Of Loop - supports continue and break
for (const item of fullMenu) console.log(item);

// Output 👇
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

// for getting index
for (const item of fullMenu.entries()) console.log(item);

// Output 👇
// (2) [0, 'Focaccia']
// (2) [1, 'Bruschetta']
// (2) [2, 'Garlic Bread']
// (2) [3, 'Caprese Salad']
// (2) [4, 'Pizza']
// (2) [5, 'Pasta']
// (2) [6, 'Risotto']

// Destructuring item
for(const [i, item] of fullMenu.entries()) {
    console.log(`${i+1} : ${item}`);
}

// Output 👇
// 1 : Focaccia
// 2 : Bruschetta
// 3 : Garlic Bread
// 4 : Caprese Salad
// 5 : Pizza
// 6 : Pasta
// 7 : Risotto