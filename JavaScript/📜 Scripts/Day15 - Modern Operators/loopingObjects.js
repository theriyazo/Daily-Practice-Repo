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
  order(a, b) {
    const items = ["Pasta", "Salad"];
    return items;
  },
};

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 1️⃣ PROPERTY NAMES -> Object.keys(<objectName>)
// returns array containing key names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
// Output ⏬
// (3) ['thu', 'fri', 'sat']

let openRestrnt = `We are open on ${properties.length} days: `;
for (const day of Object.keys(restaurant.openingHours)) {
  openRestrnt += `${day} `;
}
console.log(openRestrnt);
// Output ⏬
// We are open on thu
// We are open on fri
// We are open on sat

// 2️⃣ PROPERTY VALUES -> Object.values(<objectName>)
const values = Object.values(restaurant.openingHours);
console.log(values);
// Output ⏬
// (3) [{…}, {…}, {…}]
// 0: {open: 12, close: 22}
// 1: {open: 11, close: 23}
// 2: {open: 0, close: 24}

for (const item of values) {
  console.log(item);
}
// Output ⏬
// {open: 12, close: 22}
// {open: 11, close: 23}
// {open: 0, close: 24}

// 3️⃣ Entier (KEYS + VALUES) -> Object.entries(<objectName>)
// Object.entries() retrn an array containing key & value of entier object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
// Output ⏬
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['thu', {…}]
// 1: (2) ['fri', {…}]
// 2: (2) ['sat', {…}]

for (const [key, { open, close }] of entries) {
  console.log(`On the ${key}, we are open on ${open ? open : "24x7"}`);
}
// Output ⏬
// On the thu, we are open on 12
// On the fri, we are open on 11
// On the sat, we are open on 24x7