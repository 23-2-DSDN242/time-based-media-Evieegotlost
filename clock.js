/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
let Sunpoints;

function preload() {
  Sunpoints = loadImage('assets/sunpoints.png');
  Indipoint = loadImage('assets/indisunpoint.png');
}
function draw_clock(obj) {

  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50);
  angleMode (DEGREES);
  translate (width/2, height/2);
  let size = 80;
 push()
  
  stroke('#ffffff');
  strokeWeight(2);
  noFill();

for(let i = 0; i < 12; i++){
  rotate (360/12)
rect (10, -450/2, 20, size)
 image(Indipoint, -300, -300, 80, size);
}
  ellipse(0, 0, 300);

  fill('#ebd294');
  ellipse(0, 0, 220);
  fill(50);
  ellipse(0, -20, 180);

  noFill();
  // ellipse(480, 700, 900, 900); 
  ellipse(1010, 250, 500);
  ellipse(-50, 250, 500);


  // image(Sunpoints, -300, -300, 620, 620);
  pop()
}



// function drawTriangles(x, y, s){
//   fill(255)
//   triangle (x, y
//     x+s/2,y+s,
//     x-s/2,y+s )

// }