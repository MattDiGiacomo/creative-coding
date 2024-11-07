function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  textSize(20);
  text("hour: " + hour(), 50, 50);
  text("minute: " + minute(), 50, 75);
  text("second: " + second(), 50, 100);
  text("milisecond" + millis(), 50, 125);

}