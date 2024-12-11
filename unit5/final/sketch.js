let button;
let score = 0;
let bgColor;

function setup() {
  createCanvas(800, 600);
  bgColor = color(220); // Initial background color
  button = createButton('Click me!');
  button.size(100, 50); // Set button size
  positionButton();
  button.mousePressed(increaseScore);
}

function draw() {
  background(bgColor);
  textSize(32);
  fill(0);
  text('Score: ' + score, 10, 40);
}

function increaseScore() {
  score++;
  positionButton();
  bgColor = color(random(255), random(255), random(255)); // Change background color
}

function positionButton() {
  let x = random(width - button.width);
  let y = random(height - button.height);
  button.position(x, y);
}