"use strict";

// You cant retrive elements from a Set
// Set only to Check wheater or not an element exist
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Pasta',
    'Bread',
]);
console.log(ordersSet);
// Set(3) {'Pasta', 'Pizza', 'Bread'}
// It does not store the repeatative data

// Sets on String
console.log(new Set('Riyaaaaaz'));
// Set(5) {'R', 'i', 'y', 'a', 'z'}

// To get the length, We use size NOT length
console.log(ordersSet.size);
// 3

// To Check if certain element is in Set
console.log(ordersSet.has('Pasta'), ordersSet.has('Chocalate'));
// true false

// To add new element to Set
ordersSet.add(50);
console.log(ordersSet);
// Set(4) {'Pasta', 'Pizza', 'Bread', 50}

// To delete an element from Set
ordersSet.delete('Pasta');
console.log(ordersSet);
// Set(3) {'Pizza', 'Bread', 50}

// To clear all elements of Set
// ordersSet.clear();
console.log(ordersSet);
// Set(0) {size: 0}

// Sets are also iterabels
for(const item of ordersSet){
    console.log(item);
}
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
// (3) ['Manager', 'Chef', 'Waiter']

// To Just Check How many different positions are in staff
console.log(new Set(['Manager', 'Chef','Waiter','Chef', 'Waiter', 'Waiter']).size);

// To check Unique Charecters in a string
console.log(new Set('riyazahamad').size);

// Conclusions 
// Sets are not created to replace Array