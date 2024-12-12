let button;
let score = 0;
let bgColor;
let timer = 10; 
let end; 

function setup() {  //inital background color and sets button size
  createCanvas(800, 600);
  bgColor = color(220); 
  button = createButton('Click me!');
  button.size(100, 50); 
  positionButton();
  button.mousePressed(increaseScore);
  end = millis(); 
}

function draw() {  // randomly assign background color and displays scoreboard
  background(bgColor);
  textSize(32);
  fill(0);
  text('Score: ' + score, 10, 40);
  text('Time: ' + timer, 10, 80); 

  // Update the timer
  if (millis() - end >= 1000) { // Check if 1 second has passed
    timer--;
    end = millis(); // Reset lastTime
  }

  // Check if the timer has reached 0
  if (timer <= 0) {
    noLoop(); 
    textSize(64);
    text('Game Over', width / 2 - 160, height / 2);
  }
}

function increaseScore() {  //after a click, add one point, as well as change the background color and timer
  score++;
  positionButton();
  bgColor = color(random(255), random(255), random(255)); 
  
}

function positionButton() { // ai help, random position of the button
  let x = random(width - button.width);
  let y = random(height - button.height);
  button.position(x, y);
}