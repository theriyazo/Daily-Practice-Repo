'use strict';
const rest1 ={
    fullName: 'Zam Zam!',
    numGuests: 20,
};
const rest2 = {
    fullName: 'The Resturenta!',
    owner: 'RiyazAhamad',
};

const rest3 ={
    fullName: 'Whale Resturent!',
    numGuests: 0,
};

const rest4 ={
    fullName: 'Whale Resturent!',
    owner: 'RiyazAhamad',
};


// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// (1️⃣) OR Assignment Operator -> ||=

// Assignes a value if the right side part of the operator is fallsy

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Output 👇
// {fullName: 'Zam Zam!', numGuests: 20} 
// {fullName: 'The Resturenta!', owner: 'RiyazAhamad', numGuests: 10}



// (2️⃣) Nullish(null or undefined) Assignment Operator -> ??=

// rest3.numGuests ||= 10; // treats 0 as falsy

rest3.numGuests ??= 10;

// Output 👇
// {fullName: 'Whale Resturent!', numGuests: 0}

// (3️⃣) AND Assignment Operator -> &&=
// Assignes a value if the right side part of the operator is truthy

rest1.owner &&= '<ANONYMOUS>';
rest4.owner &&= '<ANONYMOUS>';

// Output 👇
// {fullName: 'Zam Zam!', numGuests: 20}
// {fullName: 'Whale Resturent!', owner: '<ANONYMOUS>'}

console.log(rest1);
console.log(rest2);
console.log(rest3);
console.log(rest4);