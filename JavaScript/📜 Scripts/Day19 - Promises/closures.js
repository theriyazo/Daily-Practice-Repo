// function x() {
//   const a = 10;
//   return function y() {
//     console.log(a);
//   };
// }

// const result = x();
// // function x() doesn't exists in the call stack
// setTimeout(function () {
//   result();
// }, 3000);

// Delete below code

// Objects
class anObject {
  firstName = "myName";
  lastName = "abc";
  phnNo = 7204987524;
  calcAge = (year) => {
    this.currentYear = 2022;
    return currentYear - year;
  };
  print(namee) {
    return `My Name is ${namee}`;
  };
}

// Class in JavaScript
// function anObjOfObj() {
//   this.firstName = "RiyazAhamad";
//   (this.lastName = "Hosalli"),
//     (this.phnNo = 7406564326),
//     (this.calcAge = (year) => {
//       this.currentYear = 2022;
//       return currentYear - year;
//     });
// }

// Inheritance
class anotherObj extends anObject {
  print(namee){
    return super.print(namee);
  };
 
}

// const riyaz = new anObjOfObj();

// console.log(riyaz);


const riyaz = new anotherObj();
console.log(riyaz.print('riyaz'));

