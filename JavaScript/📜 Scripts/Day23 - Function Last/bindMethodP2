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

// With Event Listeners
tata.planes = 300;
tata.buyPlane = function () {
  //   console.log(this);
  this.planes++;
  console.log(this.planes);
};
// console.log(tata);

// this key when called in DOM points to the document element
// document.querySelector(".buy").addEventListener("click", tata.buyPlane);

document
  .querySelector(".buy")
  .addEventListener("click", tata.buyPlane.bind(tata));

const addTax = (rate, value) => value + value * rate;

const addGST = addTax.bind(null, 0.23);

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}
const addGST2 = addTaxRate(0.23);

console.log(addGST2(1275));
console.log(addGST(1275));
