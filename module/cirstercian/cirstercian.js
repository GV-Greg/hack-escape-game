const canvas = document.getElementById('responsive-canvas');
const heightRatio = 0.49;
canvas.height = canvas.width * heightRatio;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Sprites {
    constructor(image, posX, posY) {
        this.image = document.getElementById(image);
        this.posX = posX;
        this.posY = posY;
        this.width = this.image.width;
        this.height = this.image.height;
    }
    draw(){
        ctx.drawImage(this.image, this.posX, this.posY);
    }
}

const line = new Sprites('base_line', canvas.width / 2, canvas.height / 2);

/* 
let unit = new Sprites('image_id', width, height);
let ten = new Sprites('image_id', width, height);
let hundred = new Sprites('image_id', width, height);
let thousand = new Sprites('image_id', width, height); 
*/

// drawing loop
function render() {
    // Here we render all the sprites after clearing the screen
    ctx.clearRect(0, 0, width, height);
    
    line.draw();
}

function loop() {
    render();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);