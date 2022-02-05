"use strict";

const bookings = [];

const createBookings = function (
  flightNum = 0,
  numOfPassenger = 0,
  
  // default parameters can be expressions and can use other parameters value as well, the only condition is that that parameter has to be pre defined as parameter
  price = 150 * numOfPassenger
) {
  const booking = {
    flightNum,
    numOfPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// Without default paremeters
createBookings(10);
// {flightNum: 10, numOfPassenger: undefined, price: undefined}

// With default parameters
createBookings(10, 20);
// {flightNum: 10, numOfPassenger: 20, price: 3000}
