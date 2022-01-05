'use strict';

// Selecting Elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentEl1 = document.querySelector('#current--0');
const currentEl2 = document.querySelector('#current--1');

// Starting conditions
let scores = [0, 0];
let activePlayer = 0;
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
let currnetScore = 0;
diceEl.classList.add('hide'); // hide dice at first

// Generating Random Number for Randowm dice Roll
const DiceRoll = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hide');
  diceEl.src = 'dice-' + dice + '.png';
  return dice;
};

const switchPlayerAndResetScore = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currnetScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Assigning random number to diceNumber
    let diceNumber = DiceRoll();

    // Check for rolled 1
    if (diceNumber !== 1) {
      // Add dice to current score
      currnetScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currnetScore;
    } else {
      //   Reset privious player score to zero and display the same
      // switch to next player
      switchPlayerAndResetScore();
    }
  }
});

// Holding score functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player score
    scores[activePlayer] += currnetScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Switch player and reset Values

    // Check if players score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      //   Finish Game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.querySelector(`#name--${activePlayer}`).textContent =
        'Winner 🎉';

      document.querySelector(`#score--${activePlayer}`).style.color = '#FFFFFF';

      document.querySelector(
        `.current--winner${activePlayer}`
      ).style.backgroundColor = '#FFFFFF';

      document.querySelector(`.current--winner${activePlayer}`).style.color =
        '#444444';

      document.querySelector(`body`).style.backgroundImage =
        'linear-gradient(to top left, #74E9AE 0%, #39DF8B 100%)';

      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.getElementById(`current--${activePlayer}`).style.color =
        '#13d271';
      document.querySelector(
        `.current-winner-label--${activePlayer}`
      ).style.color = '#13d271';
    } else {
      switchPlayerAndResetScore();
    }
  }
});

btnNew.addEventListener('click', function () {
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currnetScore = 0;
  diceEl.classList.add('hide'); // hide dice at first
});
