/** @format */

const guess = document.getElementById('guess');
const report = document.getElementById('report');

const MAXNUM = 100;
let secret;

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM + 1));
    // report.innerHTML = secret;
}

function makeGuess() {
    let myGuess = guess.value;

    if (myGuess < secret) {
        report.innerHTML += `<br/>[${myGuess}] HIGHER`;
    } else if (myGuess > secret) {
        report.innerHTML += `<br/>[${myGuess}] LOWER`;
    } else {
        report.innerHTML += `<br/>[${myGuess}] CORRECT`;
        report.style.color = 'green';
        report.style.fontSize = '30px';
        let bodyElement = document.getElementById('body');
        bodyElement.classList.add('pulse');
    }
}