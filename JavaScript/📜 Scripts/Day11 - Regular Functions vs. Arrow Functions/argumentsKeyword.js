'use  strict';

// Arguments keyword
const addExpr = function(a,b){
    let sum=0;
    for (let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    // console.log(arguments);
    return sum;
};

console.log(addExpr(5, 6, 4, 8));


// It Does not support for Arrow functions
var addArrow = () =>{
    console.log(arguments);

};

addArrow(2,3,5);