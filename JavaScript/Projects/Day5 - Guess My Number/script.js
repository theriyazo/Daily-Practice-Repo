'use strict';

// Game Starts
let score = 20;
let highestScore = 0;

// Generate Random Number
let myNum = Math.trunc(Math.random() * 20 + 1);

//   Wrong Guess
function wrongGuess() {
  score--;
  document.querySelector('.score').textContent = score;
}

//   Game is Lost
function lostGame() {
  document.querySelector('.message').textContent = '😿 You;ve Lost the Game!';
  document.querySelector('.score').textContent = 0;
}

console.log(myNum);
console.log(score);

document.querySelector('.check').addEventListener('click', function () {
  let userGuess = document.querySelector('.guess').value;

  // Check If user Guessed Number and Randomly Generated Number are Equal.
  isEqual(myNum, userGuess);
});

const isEqual = (num1, num2) => {
  //   Converting Input value to Number
  const userNum = Number(num2);
  // If there is no value entered
  if (!num2) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  // If the Answer is Correct
  else if (num1 === userNum) {
    correctAnswer();
    console.log(num1);
  }
  // If User Number is Lower than Random Number
  else if (num1 > userNum) {
    if (score > 1) {
      wrongGuess();
      document.querySelector('.message').textContent = '📉 Too low!';
    } else {
      lostGame();
    }
  }
  // If User Number is Greater than Random Number
  else if (num1 < userNum) {
    if (score > 1) {
      wrongGuess();
      document.querySelector('.message').textContent = '📈 Too high!';
    } else {
      lostGame();
    }
  }
};

//   If the Answer is Correct
function correctAnswer() {
    if(highestScore < score){
        highestScore = score;
    }
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = myNum;
  document.querySelector('.highscore').textContent = highestScore;
  document.querySelector('.message').textContent = '🎉 Correct Answer!!';
}

// Try Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  myNum = Math.trunc(Math.random() * 20 + 1);
  console.log(myNum);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
