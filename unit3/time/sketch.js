function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(135, 206, 235);

  let h = hour();
  let m = minute();
  let s = second();

  // Map time values to canvas dimensions, help from youtube and p5.js editor
  let x_hour = map(h % 12, 0, 11, 50, width - 50);
  let y_hour = map(h % 12, 0, 11, 50, height - 50);
  let x_minute = map(m, 0, 59, 50, width - 50);
  let y_minute = map(m, 0, 59, 50, height - 50);
  let x_second = map(s, 0, 59, 50, width - 50);
  let y_second = map(s, 0, 59, 50, height - 50);

  // Calculate sizes based on time, help from youtube and p5.js editor
  let hourSize = map(sin(frameCount * 0.05), -1, 1, 30, 70);
  let minuteSize = map(sin(frameCount * 0.1), -1, 1, 20, 60);
  let secondSize = map(sin(frameCount * 0.2), -1, 1, 10, 50);

  // Draw hour circle with changing size and color, help from youtube and p5.js editor
  fill(255, 100, 150, 150 + 105 * sin(frameCount * 0.05));
  ellipse(x_hour, y_hour, hourSize, hourSize);

  // Draw minute square with changing size and color, help from youtube and p5.js editor
  fill(150, 100, 255, 150 + 105 * sin(frameCount * 0.1));
  rect(x_minute - minuteSize / 2, y_minute - minuteSize / 2, minuteSize, minuteSize);

  // Draw second triangle with changing size and color, help from youtube and p5.js editor
  fill(100, 255, 150, 150 + 105 * sin(frameCount * 0.2));
  let halfSize = secondSize / 2;
  triangle(x_second, y_second - halfSize, x_second - halfSize, y_second + halfSize, x_second + halfSize, y_second + halfSize);
}

//Artist statement: In this code, I decdied to use differnet shapes along a daigonal
//line to represnt the aspcet of time, as well as using differnt colors
// and speeds of flashing due to each respective time value