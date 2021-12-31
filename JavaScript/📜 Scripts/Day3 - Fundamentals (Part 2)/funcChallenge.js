

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let teamDolphinsScore = calcAverage(44, 23, 71);
let teamKolasScore = calcAverage(65, 54, 49);

console.log(teamDolphinsScore, teamKolasScore);

function checkWinner(avgDolphins, avgKolas){
    if (avgDolphins >= 2*avgKolas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKolas})`);
    }
    else if(avgKolas >= 2*avgDolphins){
        console.log(`Koalas win ( ${avgKolas} vs. ${avgDolphins} )`);
    }
    else{
        console.log("No team Wins");
    }
}

checkWinner(teamDolphinsScore, teamKolasScore);


// Test 2
teamDolphinsScore = calcAverage(85, 54, 41);
teamKolasScore = calcAverage(23, 34, 27);
console.log(teamDolphinsScore, teamKolasScore);
checkWinner(teamDolphinsScore, teamKolasScore);




// function team(score1, score2, score3){
//     const avgScore = calcAverage(score1, score2, score3);

// }