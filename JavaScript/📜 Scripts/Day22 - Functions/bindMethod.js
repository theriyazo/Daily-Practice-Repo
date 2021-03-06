"use strict";

const tata = {
  airline: "AirIndia",
  iataCode: "IND",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      fullName: name,
    });
  },
};

const book = tata.book;

const indiGo = {
  airline: "IndiGo",
  iataCode: "ING",
  bookings: [],
  book,
};

// bind() will return a function where this keyword is bound to the function passed in it.
const bookIndiGo = book.bind(indiGo);
bookIndiGo(23, "Ratan Tata");
// Output ⤵️
// Ratan Tata booked a seat on IndiGo flight ING23

console.log(indiGo.bookings);
// 0: {flight: 'ING23', fullName: 'Ratan Tata'}

