// "use strict";

// const myPromis = new Promise((res, rej) => {
//   const sum = 1 + 3;
//   if (sum === 2) {
//     res("Yea! Promis resolved");
//   } else {
//     rej("Oh No! I feel bad");
//   }
// });

// myPromis
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });


function myPromis2() {
  return new Promise((resolve, reject) => {
    const sum = 2 + 1;

    if (sum === 2) {
      resolve("Yea! Promis resolved");
    } else {
      reject("Oh No! I feel bad");
    }
  });
}

function processResponse(response) {
  return new Promise((resolve, reject) => {
    console.log("Response Recived");
    resolve('Extra Information '+response);
  });
}

myPromis2().then(msg => {
    console.log(msg);
    return processResponse(msg);
}).then(msg2 => {
    console.log(msg2);
}).catch(err => {
    console.log(err);
});