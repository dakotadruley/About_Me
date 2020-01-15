import compareNumbers from './function.js';

// Initialize the DOM elements 
let guessButton = document.getElementById('button');
const numberInput = document.getElementById('numberInput');
const numOfTries = document.getElementById('numOfTries');
const tryAgain = document.getElementById('tryAgain'); 

// Set initial state
let numOfTriesRemaining = 4;
const correctNumber = 8;

// Set event handlers
guessButton.addEventListener('click', () => {
// Grab the value of input and then the parseInt() function parses a string and returns an integer.
    const numberGuess = numberInput.value;
    const guess = parseInt(numberGuess);

// Each time you click, numOfTries reduces by 1
    numOfTriesRemaining--;
// Each time numOfTries reduces by 1, update textContent to new value of numOfTries
    numOfTries.textContent = `You have ${numOfTriesRemaining} tries remaining`;
// When the numberInput is passed through the comparNumbers fuction, update textConent based on return
    if (compareNumbers(guess, correctNumber) === 1) {
        tryAgain.textContent = ('That was too high, try again');
  
    } else if (compareNumbers(guess, correctNumber) === -1) {
        tryAgain.textContent = ('That was too low, try again');
  
    } else if (compareNumbers(guess, correctNumber) === 0) {
        tryAgain.textContent = ('That was correct! Congradufuckalations');
    } 

// The disabled property sets or returns whether a button is disabled, or not.
    if (numOfTriesRemaining === 0 && guess !== correctNumber) {
        numOfTries.textContent = 0;
        tryAgain.textContent = ('You failed to guess the correct number. Game over and you lose :(');
        document.getElementById('button').disabled = true;
    } else if (numOfTriesRemaining === 0 && guess === correctNumber) {
        document.getElementById('button').disabled = true;
    }
}); 
