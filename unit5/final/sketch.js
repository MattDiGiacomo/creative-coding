let character;
let obstacles = [];
let gameOver = false;

function setup() {
  createCanvas(800, 400);
  character = new Character();
  obstacles.push(new Obstacle());
}

function draw() {
  background(220);

  if (!gameOver) {
    character.update();
    character.show();

    if (frameCount % 60 == 0) {
      obstacles.push(new Obstacle());
    }

    for (let obs of obstacles) {
      obs.update();
      obs.show();

      if (character.hits(obs)) {
        gameOver = true;
      }
    }

    obstacles = obstacles.filter(obs => !obs.offscreen());
  } else {
    textSize(32);
    fill(0);
    text('Game Over', width / 2 - 80, height / 2);
  }
}

function keyPressed() {
  if (key == ' ') {
    character.jump();
  }
}

class Character {
  constructor() {
    this.r = 50;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 1.5;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -25;
    }
  }

  hits(obstacle) {
    return collideRectRect(this.x, this.y, this.r, this.r, obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }

  update() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.r, this.r);
  }
}

class Obstacle {
  constructor() {
    this.w = 20;
    this.h = random(50, 150);
    this.x = width;
    this.y = height - this.h;
    this.speed = 6;
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }

  show() {
    fill(0);
    rect(this.x, this.y, this.w, this.h);
  }
}