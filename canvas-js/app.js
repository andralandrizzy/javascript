var canvas = document.getElementById('drawing');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Draw squares and rectangles
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(90, 20, 100, 100);
ctx.fillStyle = 'green';
ctx.fillRect(90, 140, 100, 100);
ctx.fillStyle = 'red';
ctx.fillRect(205, 20, 100, 100);
ctx.fillStyle = 'pink';
ctx.fillRect(205, 140, 100, 100);

// Draw a line.
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(230, 100);
ctx.stroke();

// Draw a cirlce using arc
// green circle
ctx.beginPath();
ctx.arc(390, 350, 80, 0, 2 * Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();

//Red Circle
ctx.beginPath();
ctx.arc(200, 350, 80, 0, 2 * Math.PI);
ctx.strokeStyle = 'red';
ctx.stroke();