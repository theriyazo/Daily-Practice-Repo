"use strict";
const tata = {
  airline: "AirIndia",
  iataCode: "IND",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

tata.book(256, "RiyazAhamad");
// RiyazAhamad booked a seat on AirIndia flight IND256
tata.book(731, "Raju Rasthogi");
// Raju Rasthogi booked a seat on AirIndia flight IND731

const book = tata.book;

const indiGo = {
  airline: "IndiGo",
  iataCode: "ING",
  bookings: [],
  book,
};

// indiGo.book(731, "Sundereshwar");
// Sundereshwar booked a seat on undefined flight ING731

// 1️⃣ call()
book.call(indiGo, 731, "Sundereshwar");
// Sundereshwar booked a seat on IndiGo flight ING731


// 2️⃣ apply() -> is not used as much anymore
// it takes the a function to which the this keyword is pointed and array
const flightData = [234, "Meenakshi"];

// book.apply(indiGo, flightData);
// Meenakshi booked a seat on IndiGo flight ING234

// A better way to do this is by using call() method
book.call(indiGo, ...flightData);
// Meenakshi booked a seat on IndiGo flight ING234