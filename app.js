
import isYes from './is-yes.js';

const quizButton = document.getElementById('quiz-button');
const total = document.getElementById('total');

quizButton.addEventListener('click', () => {
    const name = prompt('What is your name?');
    const confirmation = confirm('Would you like to proceed with this quiz?');
    if (confirmation === false) return;
    const answer1 = prompt('Is dancing a hobbie of Dakota\'s?');
    const answer2 = prompt('Does Dakota have more than red roses and blue violets?');
    const answer3 = prompt('Is Dakota wearing a ring in her picture?');
    let count = 0;
    if(isYes(answer1)) count++;
    if(!isYes(answer2)) count++;
    if(isYes(answer3)) count++;
    alert('You have completed the quiz and your results will now be posted!');
    total.textContent=`${name}, you got ${count} out of 3`;
});