let xPos = [];
let yPos = [];
let xVel = [];
let cDiam = [];
let numCircles = 10;

function setup() {
  createCanvas(800, 600);
  // Instead of declaring an array for eahc of the xPos, yPos, xVel, and cDiam, let for loop do it for us in setup()
  for (let i=0; i<numCircles; i++) {
    xPos.push(0);
    yPos.push(random(30, height-30));
    xVel.push(random(2,5));
    cDiam.push(random(20,70));
  }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i=0; i<numCircles; i++) {
    // draw circle
    ellipse(xPos[i], yPos[i], cDiam[i], cDiam[i]);

    // update pos
    xPos[i] = xPos[i] + xVel[i];

    // if reset is needed: pick random diameter and reset x
    if (xPos[i] > width + cDiam[i]) {
      cDiam[i] = random(20, 75);
      xPos[i] = 0 - cDiam[i];
    }
  }
}
