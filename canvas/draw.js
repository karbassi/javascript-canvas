var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');


ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 225, 310);

ctx.strokeStyle = 'blue';
ctx.strokeRect(20, 20, 150, 100);

// ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.stroke();
