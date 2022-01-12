'use strict';
 
const firstName= 'Riyaz';
let nameHolder = firstName;
nameHolder = 'theriyazo';

const nameChange = function(){
    const myName = 'Riyaz';
};

const friends = nameChange;
friends.myName = 'Anthony Gon Service';

console.log(firstName); // Riyaz
console.log(nameHolder); // theriyazo

console.log(nameChange.myName); // Anthony Gon Service
console.log(friends.myName); // Anthony Gon Service

// functions acts as objects
// It happens because the objects (nameChange & friends) also called as reference type points to the same heap memory