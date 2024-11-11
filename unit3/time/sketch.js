function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  textSize(20);
  text("hour: " + hour(), 60, 50);
  text("minute: " + minute(), 140, 50);
  text("second: " + second(), 245, 50);
  
  

}