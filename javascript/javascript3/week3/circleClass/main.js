let canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d');
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.fillColor;

        ctx.fill();
        ctx.stroke();
    }
}
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const c1 = new Circle(200, 60, 55, 0, 2 * Math.PI, getRandomColor());
const c2 = new Circle(180, 40, 20, 0, 2 * Math.PI, getRandomColor());
const c3 = new Circle(225, 40, 20, 0, 2 * Math.PI, getRandomColor());
c1.draw();
c2.draw();
c3.draw();




