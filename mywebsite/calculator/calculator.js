/** @format */

const first = document.getElementById('numone');
const second = document.getElementById('numtwo');
const result = document.getElementById('result');
const history = document.getElementById('history');
let one;
let two;
function add() {
	one = parseFloat(first.value);
	two = parseFloat(second.value);
	console.log(one);
	result.innerHTML = `${one + two}`;
	console.log(first.innerHTML);
	console.log(second);
	console.log(result.innerHTML);
	history.innerHTML += one + ` + ` + two + ` = ` + result.innerHTML + `<br>`;
}
function subtract() {
	one = parseFloat(first.value);
	two = parseFloat(second.value);
	console.log(one);
	result.innerHTML = `${one - two}`;
	console.log(first.innerHTML);
	console.log(second);
	console.log(result.innerHTML);
	history.innerHTML += one + ` - ` + two + ` = ` + result.innerHTML + `<br>`;
}
function multiply() {
	one = parseFloat(first.value);
	two = parseFloat(second.value);
	console.log(one);
	result.innerHTML = `${one * two}`;
	console.log(first.innerHTML);
	console.log(second);
	console.log(result.innerHTML);
	history.innerHTML += one + ` * ` + two + ` = ` + result.innerHTML + `<br>`;
}
function devide() {
	one = parseFloat(first.value);
	two = parseFloat(second.value);
	console.log(one);
	result.innerHTML = `${one / two}`;
	console.log(first.innerHTML);
	console.log(second);
	console.log(result.innerHTML);
	history.innerHTML += one + ` / ` + two + ` = ` + result.innerHTML + `<br>`;
}

function bang() {
	one = parseFloat(first.value);
	let factorial = 1;
	for (let i = one; i >= 1; i--) {
		factorial = factorial * i;
	}
	result.innerHTML = `${factorial}`;
	for (let i = one; i > 1; i--) {
		history.innerHTML += i + ` * `;
	}
	history.innerHTML += `1 = ` + result.innerHTML + `<br>`;
}

function factor() {
	one = parseFloat(first.value);
	history.innerHTML += `${one} = `;
	let primes = [];
	primes[0] = 2;
	let index = 1;
	for (let i = 3; i <= one; i += 2) {
		let isprime = true;
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j == 0) {
				isprime = false;
				break;
			}
		}
		if (isprime) {
			primes[index++] = i;
		}
	}
	let lastone = false;
	while (one > 1) {
		for (let i = 0; i < primes.length; i++) {
			if (one == primes[i]) {
				one = one / primes[i];
				history.innerHTML += primes[i];
				lastone = true;
				break;
			}
		}
		if (lastone) {
			break;
		}
		for (let i = 0; i < primes.length; i++) {
			if (one % primes[i] == 0) {
				one = one / primes[i];
				history.innerHTML += primes[i] + ` * `;
				break;
			}
		}
	}
	history.innerHTML += `<br>`;
}
