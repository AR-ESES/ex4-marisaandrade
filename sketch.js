
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(255);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
    fill(0,191,255)
    circle (200, 100, 200)

    fill(0,0,0)
    circle (170, 70, 20)

    fill(0,0,0)
    circle (220, 70, 20)
      pop();
    }
  }
}