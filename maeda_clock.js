// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(190);
  textAlign(CENTER, CENTER);
  fill(0);
  text("10", width/2, height/2);

  translate(width / 2, height / 2);
  push()
  angleMode(DEGREES);
  rotate(360 / 12);
  textSize(120);
  fill(1000);
  text("57", 0, 0);
  pop()

  push()
  rotate(360 / 1.1);
  textSize(70);
  fill(252,3,3);
  text("40", 0, 0);
  pop()
}
