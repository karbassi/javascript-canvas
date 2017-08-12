var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');

// // Drawing a box
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.lineTo(100, 80);
ctx.lineTo(80, 100);
ctx.lineTo(60, 80);
ctx.stroke();

// // Filling the box
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 80);
// ctx.lineTo(80, 100);
// ctx.lineTo(60, 80);
// ctx.fillStyle = "aqua";
// ctx.fill();
// ctx.stroke();

// // Adding a stroke (border) color
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 80);
// ctx.lineTo(80, 100);
// ctx.lineTo(60, 80);
// ctx.fillStyle = "aqua";
// ctx.fill();
// ctx.strokeStyle = "red"
// ctx.stroke();

// // Adding a stroke (border) width
// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(100, 200);
// ctx.lineTo(100, 80);
// ctx.lineTo(80, 100);
// ctx.lineTo(60, 80);
// ctx.fillStyle = "aqua";
// ctx.fill();
// ctx.strokeStyle = "red"
// ctx.lineWidth = 5;
// ctx.stroke();

// // Drawing a circle
// ctx.beginPath();
// ctx.arc(250, 250, 200, 0, 2 * Math.PI);
// ctx.stroke();
