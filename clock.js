/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
let Sunpoints;

function preload() {
  Sunpoints = loadImage('assets/sunpoints.png');
  Indipoint = loadImage('assets/indipoint2.png');
  Sidepoint = loadImage('assets/indipoint3.png');
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
 
 
  background('#0f1726');
  angleMode (DEGREES);
  translate (width/2, height/2);
  let size = 150;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let secondsWithFraction   = seconds + (millis / 1000.0);
  let minRotation = map(obj.minutes, 0, 59, 0, 360);
  let pointRotation2 = map(obj.seconds, 0, 59, 0, -90);
   stroke('#ffffff');
  strokeWeight(2);
  noFill();
  drawSideL ();
  drawSideR ();
  drawCenter ();
  drawCenter2 ();

  function drawCenter(){
  push()
  rotate(secondsWithFraction)
for(let i = 0; i < 12; i++){
  rotate (360/12)
 image(Indipoint, -450/6, 110, size, size);

}
  pop()
}

function drawCenter2(){
  push()
  rotate(minRotation)
for(let i = 0; i < 12; i++){
  rotate (360/12)
fill(255);
quad(35, 157, 30, 148, 30, 133, 35, 145);
//(top, right, bottom, left)
}
  pop()
}

  function drawSideL(){
  push()
  translate(-500,0)
  rotate(pointRotation2)
for(let i = 0; i < 12; i++){
  rotate (360/12)
 image(Sidepoint, -450/6, 90, size, size+50);
}
  pop()
}

  function drawSideR(){
  push()
  translate(500,0)
  rotate(pointRotation2)
for(let i = 0; i < 12; i++){
  rotate (360/12)
 image(Sidepoint, -450/6, 90, size, size+50);
}
  pop()
}

  ellipse(0, 0, 300);

  fill('#ebd294');
  ellipse(0, 0, 220);
  fill('#0f1726');
  ellipse(0, -20, 180);

  noFill();
  // ellipse(480, 700, 900, 900); 
  ellipse(500, 0, 300);
  ellipse(-500, 0, 300);

  fill(255);
  strokeWeight(0.7)
  line(-1000, -230, 1000, -230);
  line(-1000, 230, 1000, 230);
  // image(Sunpoints, -300, -300, 620, 620);

}



// function drawTriangles(x, y, s){
//   fill(255)
//   triangle (x, y
//     x+s/2,y+s,
//     x-s/2,y+s )

// }