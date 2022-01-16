"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [goalNum, goalScoredBy] of game.scored.entries()) {
  console.log(`Goal ${goalNum + 1}: ${goalScoredBy}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const value of odds) {
  average += value;
}
average /= 3;
console.log("And the odds average is :" + average);

// 3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

// const scorers = {};
// // for (let i = 0; i < game.scored.length; i++) {
// //   let searchTerm = game.scored[i];
// //   for (let j = 0; j < game.scored.length; j++) {
// //       if(game.scored[i] === searchTerm){
// //         scorers.game.scored[i]
// //       }
// //   }
// // }
