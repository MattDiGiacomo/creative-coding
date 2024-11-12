let x_hour = 50;
let x_minute = 50;
let x_second = 50;

let currentSecond = 0;


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(135, 206, 235);

  textSize(20);
  text("hour: " + hour(), 60, 50);
  text("minute: " + minute(), 140, 50);
  text("second: " + second(), 245, 50);
  
  push();
  line(50,150,50,350);
  line(550,150,550,350);
  pop();

  push();
  noStroke();
  fill("red");

  x_hour = map(hour(), 0, 23, 50, 550);
  circle(x_hour, 180, 40);

  x_minute = map(minute(), 0, 59,50,550);
  circle(x_minute,240, 40);

  x_second = map(second(), 0, 59, 50, 550);
  circle(x_second, 300, 40);
  pop();
}