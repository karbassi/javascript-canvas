var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');

// FACE
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();

// LEFT EYE
ctx.beginPath();
ctx.arc(175, 175, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// RIGHT EYE
ctx.beginPath();
ctx.arc(325, 175, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// SMILE
ctx.beginPath();
ctx.arc(250, 250, 150, 0, Math.PI);
ctx.lineTo(400, 250);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
