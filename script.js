'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 45;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
// console.log(score);
// console.log(typeof score);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Game Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //save the guess the player makes in the guess variable
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number');
  } else if (guess === secretNumber) {
    //Highscore implementation
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //When guess is not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost,loser';
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
