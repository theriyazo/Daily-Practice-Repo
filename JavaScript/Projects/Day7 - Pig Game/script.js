'use strict';

// Selecting Elements
const fullBody = document.querySelector('body');

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const nameEl0 = document.querySelector('#name--0');
const nameEl1 = document.querySelector('#name--1');

const label0El = document.getElementById('label--0');
const label1El = document.getElementById('label--1');

const curWinner0El = document.querySelector('.current--winner0');
const curWinner1El = document.querySelector('.current--winner1');

// Starting conditions
let scores = [0, 0];
let activePlayer = 0;
let playing = true;
let currnetScore = 0;

// Resetting to starting conditions
const init = function () {
  scores = [0, 0];

  activePlayer = 0;
  currnetScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  playing = true;

  fullBody.style.backgroundImage =
    'linear-gradient(to top left, #88ECDF 0%, #74E9AE 100%)';
  diceEl.classList.add('hide'); // hide dice at first

  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');

  nameEl0.textContent = 'PLAYER 1';
  nameEl1.textContent = 'PLAYER 2';

  score0El.style.color = '#39DFCA';
  score1El.style.color = '#39DFCA';

  curWinner0El.style.backgroundColor = '#39DFCA';
  curWinner1El.style.backgroundColor = '#39DFCA';

  current0El.style.color = '#FFFFFF';
  current1El.style.color = '#FFFFFF';
  label0El.style.color = '#FFFFFF';
  label1El.style.color = '#FFFFFF';
};

init();

// Generating Random Number for Randowm dice Roll
const DiceRoll = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hide');
  diceEl.src = 'dice-' + dice + '.png';
  return dice;
};

// Switching player by swaping 0 <-> 1
const switchPlayerAndResetScore = function () {
  // resetting current score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currnetScore = 0;

  // Swaping active player
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
    if (scores[activePlayer] >= 100) {
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

      fullBody.style.backgroundImage =
        'linear-gradient(to top left, #74E9AE 0%, #39DF8B 100%)';

      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.getElementById(`current--${activePlayer}`).style.color =
        '#13d271';
      console.log(`label--${activePlayer}`);

      document.getElementById(`label--${activePlayer}`).style.color = '#13d271';
    } else {
      switchPlayerAndResetScore();
    }
  }
});

btnNew.addEventListener('click', function () {
  // ResetEverything and start a new game
  init();
});
