"use strict";
const airline = "TAP Air Portugal";
let plane = "A320";

let passenger = "rIyAzAhAMaD";
const stringCaseFix = function (str) {
  str = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  return str;
};
passenger = stringCaseFix(passenger);
console.log(passenger);
// Output ⏬
// Riyazahamad

// Comparing Emails
const loginEmail = "riyaz@theriyazo.com";
const normalizeEmail = function (email) {
  email = email.toLowerCase().trim();
  return email;
};
const userEmail = " Riyaz@theriyazo.com  \n";

const login = function (userEmail) {
  userEmail = normalizeEmail(userEmail);
  if (userEmail === loginEmail) {
    console.log("Login Successful!");
  } else {
    console.log("Enter Correct Email Id!");
  }
};
// Output ⏬
// Login Successful!

login(userEmail);

// Replaceing
const priceUS = "527,65$";
const priceIND = priceUS.replace("$", "₹").replace(",", ".");
console.log(priceIND);
// Output ⏬
// 527.65₹

const announcement = "All Passenger come to barding door 23. Barding door 23";
console.log(announcement.replaceAll("door", "gate"));
// Output ⏬
// All Passenger come to barding gate 23. Barding gate 23

// Includes
plane = "Airbus A413neo";
console.log(plane.includes("41"));
// Output ⏬
// true

// startWith() and endWith()
console.log(plane.startsWith("bus"));
// Output ⏬
// false
console.log(plane.startsWith("Air"));
// Output ⏬
// true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("It's part of the new Airbus");
}
// Output ⏬
// It's part of the new Airbus

// Practice exercise
function checkBaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun")) {
    console.log("Sorry! You can't get aboard, you're carrying a gun.");
  } else if (baggage.includes("knif")) {
    console.log("Sorry! You can't get aboard, you're carrying a knif.");
  } else {
    console.log("All Okay! You Can get aboard :)");
  }
}

checkBaggage("I have a some food, chips, and a Knif");
checkBaggage("I have some fruits, and camera");
checkBaggage("i have a gun for protection");
// Output ⏬
// Sorry! You can't get aboard, you're carrying a knif.
// All Okay! You Can get aboard :)
// Sorry! You can't get aboard, you're carrying a gun.
