const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");
var sound = document.getElementById("sound");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let power;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

function resetGame() {
    clearInterval(intervalID); // clear the clock
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;

    resetBall()
    resetPaddles()
    resetPower()
    spawnPower()
    scoreL = 0;
    scoreR = 0;
    updateScore();
    nextTick(); // start running the clock
}

function resetPaddles() {
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "black")
    paddleR = new Paddle(boardWidth - paddleWidth, 0, paddleLength, paddleWidth, "black")
}

function resetBall() {
    ball = new Ball(boardWidth / 2, boardHeight / 2, -2, -2, ballRadius, "red");
}

function resetPower() {
    power = new Powerup(500, 500);
}

function clearBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    paddleL.draw(ctx);
    paddleR.draw(ctx);
    ball.draw(ctx);
    power.draw(ctx);
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }

            ball.bounceWall();
            if (ball.bouncePaddleL(paddleL)) score("right");
            if (ball.bouncePaddleR(paddleR)) score("left");

            ball.move();
            checkPower();
            draw();
            nextTick();
        }, 10
    );
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR++;

    updateScore();
    resetBall();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}

let powerexists = false;

function spawnPower() {
    setTimeout(() => {
        if (Math.random() > 0.65) {
            power.x = 225;
            power.y = Math.random() * 475;
        }
        spawnPower();
    }, 5000);
}

function checkPower() {
    if (ball.x > 225 && ball.x < 275 && ball.y < power.y + 50 && ball.y > power.y) {
        sound.play();
        power.x = 500;
        power.y = 500;
        if (ball.vx > 0) {
            if (paddleL.y > 300) {
                paddleL.y = 300;
            }
            paddleL.l = paddleLength * 2;
            setTimeout(() => {
                paddleL.l = paddleLength;
            }, 5000);
        } else if (ball.vx < 0) {
            if (paddleR.y > 300) {
                paddleR.y = 300;
            }
            paddleR.l = paddleLength * 2;
            setTimeout(() => {
                paddleR.l = paddleLength;
            }, 5000);
        }
    }
}
