const image = document.getElementById("image");

class Powerup {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.drawImage(image, this.x, this.y, 50, 50);
    }

}