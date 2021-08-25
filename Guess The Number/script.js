'use strict';

// console.log(document.querySelector('.message').textContent);

// when you have multiple dot operations they are executed from left to right
//.textcontent property shows the innerhtml of the selected class
//DOM stands for Document object model, its a structured representation of html document, it allows javascript to access html elements and styles to manipulate them. DOM and DOM METHODS are not part of javascript. they are part of web API (application programming interface). web API are libraries that are also written in Javascript.

// document.querySelector('.message').textContent = 'Correct Number!!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.number').textContent);

// console.log(document.querySelector('.score').textContent);
// document.querySelector('.guess').value = 24
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let newScore = 20;
let highScore = 0;

//refactoring using functions. 
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number !!';
    //refactoring using functions
    displayMessage('No Number!!');
    //when the player wins
  } else if (guess === secretNumber) {
    //   document.querySelector('.message').textContent = 'Correct Number !!';
     //refactoring using functions
    displayMessage('Correct Number!!');

    document.querySelector('body').style.backgroundColor = '#62BD69'; //the css value must be inside a string
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //when player gets a highscore
    if (newScore > highScore) {
      highScore = newScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    //refactoring helps us get rid of duplicate code. keeping our codes dry makes it easier to change some functionality
    //refactoring we merged the greater than condition with the less than condition in one big block instead of 2
  } else if (guess !== secretNumber) {
    if (newScore > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'too high!!' : 'too low!!';
       //refactoring using functions
      displayMessage(guess > secretNumber ? 'too high!!' : 'too low!!');
      newScore--;
      document.querySelector('.score').textContent = newScore;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game';
       //refactoring using functions
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (newScore > 1) {
  //       document.querySelector('.message').textContent = 'Too High!!';
  //       newScore--;
  //       document.querySelector('.score').textContent = newScore;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game !!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (newScore > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!!';
  //       newScore--;
  //       document.querySelector('.score').textContent = newScore;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game !!!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  newScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = newScore;
  //   document.querySelector('.message').textContent = 'start guessing.....';
   //refactoring using functions
  displayMessage('start guessing.....');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
