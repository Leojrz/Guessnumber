'use strict';
// console.log(document.querySelector('.message')); // Lo que hicimos aquí fue seleccionar el elemnto html con query selector y en parentesheses and quotes the class. Then the textContent shows us the content of the class
// document.querySelector('.message').textContent = '🎉 Correct Number!'; // Cambiamos el contenido del html por uno nuevo

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value); // Entramos a ver el valor de .guess, en este caso esta empty
// document.querySelector('.guess').value = 23; // Cambiamos el valor del input a 23

// let secretNumber = Math.trunc(Math.random() * 20) + 1; // Creamos una variable que genere un numero random entre 1 y 20
// let score = 20;
// let highscore = 0;

// // Check Button
// document.querySelector('.check').addEventListener('click', function () {
//   // Pasamos como primer argumento el tipo de evento que qeuremos que sea. En este caso es click el cual siempre debe ir en quotes. Duespes debemos decirle que es lo que queremos que haga el evento. Siempre va a pedir que pasemos una funcion como argumento
//   const guess = Number(document.querySelector('.guess').value); // Para poder comparar los valores debemos convertir el string en un number
//   if (!guess) {
//     // Si el input está vacio y aprieta check va a saltar este error
//     document.querySelector('.message').textContent = '⛔No number!';
//     // When the player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347'; // Aquí cambiamos el css con js. Para cambiar el css debemos usar el .style, luego la propiedad que quermeos cambiar, y si son dos palabras como en este caso debemos usar CamelCase, y por ultimo el valor entre quotes
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } // When guess is too high
//     else if (guess > secretNumber) {
//       if (score > 1) {
//         document.querySelector('.message').textContent = '🔺 Too High!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent = '🧨 You lost the game!';
//         document.querySelector('.score').textContent = 0;
//       }
//       // When guess is too low
//     } else if (guess < secretNumber) {
//       if (score > 1) {
//         document.querySelector('.message').textContent = '🔻 Too Low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent = '🧨 You lost the game!';
//         document.querySelector('.score').textContent = 0;
//       }
//     }
// });

// //  Again Button
// document.querySelector('.again').addEventListener('click', function () {
//   // Reset Score
//   score = 20;
//   document.querySelector('.score').textContent = score;

//   // Reset Message
//   document.querySelector('.message').textContent = 'Start guessing...';

//   // Reset Background and width
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';

//   // Reset Number
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = '?';

//   document.querySelector('.guess').value = '';
// });

// Refactoring technique means to restructe the code to eliminate duplicate code
// Refactoring Code - Clean Code
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Creamos una variable que genere un numero random entre 1 y 20
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (value) {
  document.querySelector('.number').textContent = value;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const bodyStyle = function (style) {
  document.querySelector('body').style.backgroundColor = style;
};
const numberStyle = function (style) {
  document.querySelector('.number').style.width = style;
};

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔No number!');
  }
  // When the player wins
  else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Number!');
    bodyStyle('#60b347');
    numberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the player's wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔺 Too High!' : '🔻 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🧨 You lost the game!');
      displayScore(0);
    }
  }
});

//  Again Button
document.querySelector('.again').addEventListener('click', function () {
  // Reset Score
  score = 20;
  displayScore(score);
  // Reset Message
  displayMessage('Start guessing...');

  // Reset Background and width
  bodyStyle('#222');
  numberStyle('15rem');

  // Reset Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');

  document.querySelector('.guess').value = '';
});
