'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//EVENTS
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there in no input
  if (!guess) {
    displayMessage('No Number');
    //document.querySelector('.message').textContent = 'No number';

    // when player wins
  } else if (guess == secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    // selecting the body css manipulation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Guess is too high!' : 'Too Low!');
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Guess is too high!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// when player guess  high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Guess is too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You Lost the Game!';
//     document.querySelector('.score').textContent = 0;
//   }
//   // when player guess too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You Lost the Game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
//});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
