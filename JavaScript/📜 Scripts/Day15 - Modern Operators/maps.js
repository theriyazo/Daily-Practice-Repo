"use strict";
// MAPS
// The key can be of any type

const resturent = new Map();
resturent.set("name", "Abe ZamZam");
resturent.set(1, "Ishwar Nagar, Banglore");

// The set method returns the map
console.log(resturent.set(2, "Bhagyanagar, Koppal"));
// Output ⏬
// Map(3) {'name' => 'Abe ZamZam', 1 => 'Ishwar Nagar, Banglore', 2 => 'Bhagyanagar, Koppal'}

// we can also chain the set method
resturent
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Now Open :D")
  .set(false, "We are now closed :(");

//   To retrive the map data, we use -> get()
console.log(resturent.get("name"));
// Output ⏬
// Abe ZamZam

const time = 11;
console.log(
  resturent.get("open") <= time ? resturent.get(true) : resturent.get(false)
);
// Output ⏬
// We are Now Open :D

// To check map contains a certain key
console.log(resturent.has('open'));
// Output ⏬
// true

// To delete a key-value pair
resturent.delete('close');
resturent.delete('open');
console.log(resturent);
// Output ⏬
// Map(5) {'name' => 'Abe ZamZam', 1 => 'Ishwar Nagar, Banglore', 2 => 'Bhagyanagar, Koppal', true => 'We are Now Open :D', false => 'We are now closed :('}

// To find the size of the map
// size is not a method in Map() like Set()
console.log(resturent.size);
// Output ⏬
// 5

// To clear all the elements
resturent.clear();
console.log(resturent);
// Output ⏬
// Map(0) {size: 0}

// We can also store Objects inside Map()
// 1. Storing Array
const arr = [1, 2];
resturent.set(arr, 'Test');
console.log(resturent);
// Output ⏬
// Map(1) {Array(2) => 'Test'}

// 2. Storing DOM Element
resturent.set(document.querySelector('h1'), "Heading 1");
console.log(resturent);
