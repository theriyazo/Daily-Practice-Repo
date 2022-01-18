"use strict";

// You cant retrieve elements from a Set
// Set only to Check whether  or not an element exist
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Pasta',
    'Bread',
]);
console.log(ordersSet);
// Output ⏬
// Set(3) {'Pasta', 'Pizza', 'Bread'}
// It does not store the repetitive  data

// Sets on String
console.log(new Set('Riyaaaaaz'));
// Output ⏬
// Set(5) {'R', 'i', 'y', 'a', 'z'}

// To get the length, We use size NOT length
console.log(ordersSet.size);
// Output ⏬
// 3

// To Check if certain element is in Set
console.log(ordersSet.has('Pasta'), ordersSet.has('Chocalate'));
// Output ⏬
// true false

// To add new element to Set
ordersSet.add(50);
console.log(ordersSet);
// Output ⏬
// Set(4) {'Pasta', 'Pizza', 'Bread', 50}

// To delete an element from Set
ordersSet.delete('Pasta');
console.log(ordersSet);
// Output ⏬
// Set(3) {'Pizza', 'Bread', 50}

// To clear all elements of Set
// ordersSet.clear();
console.log(ordersSet);
// Output ⏬
// Set(0) {size: 0}

// Sets are also iterabels
for(const item of ordersSet){
    console.log(item);
}
// Output ⏬
// Pizza
// Bread
// 50

// Example
const staff = ['Manager', 'Chef','Waiter','Chef', 'Waiter', 'Waiter'];
// To know how many positions are in a resturent
const staffPositions = new Set(staff);
// We can pass the staff array becouse Set accepts itterables & array is an itterable

// Now we want create Array from the Set using Spread Operator
const staffPositionsArray = [...new Set(staff)];
console.log(staffPositionsArray);
// Output ⏬
// (3) ['Manager', 'Chef', 'Waiter']

// To Just Check How many different positions are in staff
console.log(new Set(['Manager', 'Chef','Waiter','Chef', 'Waiter', 'Waiter']).size);

// To check Unique Charecters in a string
console.log(new Set('riyazahamad').size);

// Conclusions 
// Sets are not created to replace Array