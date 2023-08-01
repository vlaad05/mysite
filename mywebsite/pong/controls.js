const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;
let paddleVelocity = 4;

window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.keyCode;
    console.log(`KEYDOWN: ${key}`);
    
    switch (key) {
        case (UPARROW):
            paddleR.vy = -paddleVelocity;
            break;
        case (DOWNARROW):
            paddleR.vy = paddleVelocity;
            break;
        case (WKEY):
            paddleL.vy = -paddleVelocity;
            break;
        case (SKEY):
            paddleL.vy = paddleVelocity;
            break;
        default:
    }
}

// CODE HERE
window.addEventListener("keyup", keyUp);
function keyUp(event) {
    const key = event.keyCode;
    console.log(`KEYUP:   ${key}`);
    
    switch (key) {
        case (UPARROW):
            paddleR.vy = 0;
            break;
        case (DOWNARROW):
            paddleR.vy = 0;
            break;
        case (WKEY):
            paddleL.vy = 0;
            break;
        case (SKEY):
            paddleL.vy = 0;
            break;
        default:
    }
}