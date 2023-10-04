var c = document.querySelector("#myCanvas");

var ctx = c.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "white";
ctx.strokeRect(10, 10, 360, 210);

ctx.fillStyle = "green";
ctx.fillRect(12, 12, 358, 208);

var centerX = 358 / 2;
var centerY = 208 / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.lineWidth = 1;
ctx.fill();
ctx.stroke();
