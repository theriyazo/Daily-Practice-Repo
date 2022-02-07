'use strict';

const flight = 'LH101';
const person = {
    firstName : "RiyazAhamad",
    passportNum : 1234567890
};

function checkIn(flightNum, passenger){
    flightNum = 'WH250';
    passenger.firstName = 'Mr.'+passenger.firstName;
    passenger.passportNum = 2645885645;

    return isValidPassport(passenger.passportNum);
};

function isValidPassport(passNum){
    if(passNum === 1234567890){
        return "Checked In!";
    }
    else{
        return "Worng Passport";
    }
}

console.log(isValidPassport(person.passportNum));

// When we pass premitive values then the value is assigned to the called function parameter
// In case of objects the variable stores the reference value of that object in the memory heap
// and the same is passed to the function parameter
// When we update the value of the object in the function it object value changes and the reference is same hence valuve completly changes

checkIn(flight, person)
console.log(isValidPassport(person.passportNum));