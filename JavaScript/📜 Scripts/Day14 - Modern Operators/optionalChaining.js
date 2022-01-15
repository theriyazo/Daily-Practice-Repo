// Optional Chaining was introduced in ES2020

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

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `You\'re Order of pasta with ${ing1}, ${ing2} and ${ing3} is received!`
    );
  },
};

// console.log(restaurant.openingHours.mon.open); // Error

// Optional Chainging -> ?.
// To check if a property exists inside an object
console.log(restaurant.openingHours.mon?.open);

// Multiple optional Chaining
console.log(restaurant?.openingHours?.fri?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const status = restaurant.openingHours[day]?.open ?? "Closed!";
  console.log(`On ${day}, We are ${status}`);
}
// On mon, We are Closed!
// On tue, We are Closed!
// On wed, We are Closed!
// On thu, We are 12
// On fri, We are 11
// On sat, We are 0
// On sun, We are Closed!

// Nullish Coalesence and Optional Chaining
console.log(restaurant.order?.(0, 1) ?? "Method Does not exist!");
// (2) ['Pasta', 'Salad']

// Optional Chaining on Arrays
const users = [
  { fullName: "RiyazAhamad", email: "theriyazhosalli1@gmail.com" },
];
console.log(users[0]?.fullName ?? "User fullName doesn't exist");


