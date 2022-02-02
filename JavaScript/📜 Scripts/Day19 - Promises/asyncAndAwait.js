"use stirct";

// function myPromis(result) {
//   return new Promise((res, rej) => {
//     if (result) {
//       res("Promis fullfilled");
//     } else {
//       rej("Sorry! Better luck next time");
//     }
//   });
// }

// function processRes(msg) {
//   return new Promise((res, rej) => {
//     console.log("processing response");
//     res("Greeting from HR " + msg);
//   });
// }

// myPromis(true)
//   .then((res) => {
//     console.log(res);
//     return processRes(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function myPromis2() {
  return new Promise((res, rej) => {
    const sum = 1 + 1;

    if (sum === 2) {
      res("Yea! Promis resolved");
    } else {
      rej("Oh No! I feel bad");
    }
  });
}

function processResponse(response) {
  return new Promise((res, rej) => {
    console.log("Response Recived");
    res("Extra Information " + response);
  });
}

async function runAsync() {
  try {
    const result1 = await myPromis2();
    console.log(result1);
    const result2 = await processResponse(result1);
    console.log(result2);
  } catch (err) {
    console.log(err);
  }
}
runAsync();
