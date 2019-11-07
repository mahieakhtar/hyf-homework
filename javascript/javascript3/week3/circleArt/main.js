let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
class Circle {
    constructor(x, y, r, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.fillColor = fillColor;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.floor(2 * Math.PI));
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke();
    }
}
let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(() => {
    let c = new Circle(Math.floor(Math.random() * 1250), Math.floor(Math.random() * 1000), Math.floor(2 * Math.PI), getRandomColor());
    c.draw();
}, 20) 
