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

// Comparing Emails
const email = "riyaz@theriyazo.com";
const normalizeEmail = function (email) {
  email = email.toLowerCase().trim();
  return email;
};
const loginEmail = " Riyaz@theriyazo.com  \n";

const login = function (userEmail) {
  userEmail = normalizeEmail(userEmail);
  if (userEmail === email) {
    console.log("Login Successful!");
  } else {
    console.log("Enter Correct Email Id!");
  }
};

login(loginEmail);

// Replaceing
const priceUS = "527,65$";
const priceIND = priceUS.replace("$", "₹").replace(",", ".");
console.log(priceIND);

const announcement = "All Passenger come to barding door 23. Barding door 23";
console.log(announcement.replaceAll("door", "gate"));
// All Passenger come to barding gate 23. Barding gate 23

// Includes
plane = "Airbus A413neo";
console.log(plane.includes("41"));
// true

// startWith() and endWith()
console.log(plane.startsWith("bus"));
// false
console.log(plane.startsWith("Air"));
// true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("It's part of the new Airbus");
}
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


