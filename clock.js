/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
let Sunpoints;

function preload() {
  Sunpoints = loadImage('assets/sunpoints.png');
  Indipoint = loadImage('assets/indipoint2.png');
  Sidepoint = loadImage('assets/indipoint3.png');
  MinuteHand = loadImage('assets/minutehand.png');
  Star = loadImage('assets/hourstar.png');
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
 
  if(obj.seconds_until_alarm < 0){
  background('#0f1726');

  angleMode (DEGREES);
  translate (width/2, height/2);
  let size = 150;
  let clockHour = obj.hours;
  
  if (obj.hours < 1){
    clockHour = 12;  // no zero allowed
  }

  if (obj.hours > 12){ //never over 12
    clockHour = obj.hours - 12;
  }
  
  let seconds = obj.seconds;
  let millis = obj.millis;
  let secondsWithFraction = seconds + (millis / 1000.0);
  let minRotation = map(obj.minutes, 0, 60, 0, 360);
  let pointRotation = map(obj.seconds, 0, 59, 0, -360);
  let hourRotation = map(obj.hours, 0, 12, 0, 360);
  drawLerp();
  drawSides();
  drawSideL ();
  drawSideR ();
  drawCenter ();
  drawCenter2 ();
  drawMoon();
  drawMins();
  drawHours();
  drawHourhand();



function drawLerp(){

ellipseMode(CENTER);
noStroke();
let OpacityAm = 30;
  fill(255, 237, 179, OpacityAm);
  let sizeStep = 15;
  let howManyCircles = 20;
  let width = 0;
  let height= 0;
  for(let i = 0; i < howManyCircles; i++){
    ellipse(width/2, height/2, sizeStep*i);
  }
  for(let i = 0; i < howManyCircles+15; i++){
    fill(31, 60, 99, 20);
    ellipse(width+500, height/2, sizeStep*i);
    ellipse(width-500, height/2, sizeStep*i);
  }
}

  noFill();

  function drawCenter(){
    stroke('#ffffff');
    strokeWeight(2);
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
  rotate(-secondsWithFraction)
for(let i = 0; i < 12; i++){
  rotate (360/12)
   noFill();
   strokeWeight(1)
    ellipse(0, 0, 300);
    fill(255);
    quad(35, 157, 30, 148, 30, 133, 36, 146);
          //(top, right, bottom, left)
}
  pop()
}


function drawSides(){
strokeWeight(1.5)
stroke(255);
noFill();
ellipse(0, 0, 550, 550); 
fill(15, 23, 38, 160);
ellipse(500, 0, 300);
ellipse(-500, 0, 300);

noFill();
rect(-1000, -230, 2000, -230);
rect(-1000, 230, 2000, 230);
// image(Sunpoints, -300, -300, 620, 620);
}

  function drawSideL(){
  push()
  translate(-500,0)
  rotate(pointRotation)
for(let i = 0; i < 12; i++){
  rotate (360/12)
  image(Sidepoint, -450/6, 90, size, size+50);
}
  pop()
}

  function drawSideR(){
  push()
  translate(500,0)
  rotate(pointRotation)
for(let i = 0; i < 12; i++){
  rotate (360/12)
 image(Sidepoint, -450/6, 90, size, size+50);
}
  pop()
}

  function drawMoon(){

  push()
  translate(0,0)
  rotate(minRotation)

  noStroke();
  fill('#fff9d1');
  ellipse(0, 0, 220);

  fill('#0f1726');
  ellipse(0, -20, 180);
  image(MinuteHand, -225, -225, 450, 450);
  pop()
}

function drawMins(){
  push()
for(let i = 0; i < 60; i++){
  rotate (360/60)
fill(255);
rect(0, 190, 0, 25);

}
  pop()
}

function drawHours(){
  push()
for(let i = 1; i < 12; i++){
  rotate (360/12)
fill(255);
rect(-0.5, 185, 1, 40);

}
  pop()
}

function drawHourhand(){

  push()
  translate(0, 0)
  rotate(hourRotation)

  for(let i = 0; i < 1; i++){

image(Star, -30 ,-510/2, 60, 85);
  pop()
}
}

}else if(obj.seconds_until_alarm > 0){

      background('#e8bfbe');

  angleMode (DEGREES);
  translate (width/2, height/2);
  let size = 150;
  let clockHour = obj.hours;
  
  if (obj.hours < 1){
    clockHour = 12;  // no zero allowed
  }

  if (obj.hours > 12){ //never over 12
    clockHour = obj.hours - 12;
  }
  
  let seconds = obj.seconds;
  let millis = obj.millis;
  let secondsWithFraction = seconds + (millis / 1000.0);
  let minRotation = map(obj.minutes, 0, 60, 0, 360);
  let pointRotation = map(obj.seconds, 0, 59, 0, -360);
  let hourRotation = map(obj.hours, 0, 12, 0, 360);
  drawLerp();
  drawSides();
  drawSideL ();
  drawSideR ();
  drawCenter ();
  drawCenter2 ();
  drawMoon();
  drawMins();
  drawHours();
  drawHourhand();



function drawLerp(){

ellipseMode(CENTER);
noStroke();
let OpacityAm = 30;
  fill(255, 237, 179, OpacityAm);
  let sizeStep = 15;
  let howManyCircles = 20;
  let width = 0;
  let height= 0;
  for(let i = 0; i < howManyCircles; i++){
    ellipse(width/2, height/2, sizeStep*i);
  }
  for(let i = 0; i < howManyCircles+15; i++){
    fill(163, 237, 255, 20);
    ellipse(width+500, height/2, sizeStep*i);
    ellipse(width-500, height/2, sizeStep*i);
  }
}

  noFill();

  function drawCenter(){
    stroke('#ffffff');
    strokeWeight(2);
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
  rotate(-secondsWithFraction)
for(let i = 0; i < 12; i++){
  rotate (360/12)
   noFill();
   strokeWeight(1)
    ellipse(0, 0, 300);
    fill(255);
    quad(35, 157, 30, 148, 30, 133, 36, 146);
          //(top, right, bottom, left)
}
  pop()
}


function drawSides(){
strokeWeight(1.5)
stroke(255);
noFill();
ellipse(0, 0, 550, 550); 
fill(255, 184, 213, 160);
ellipse(500, 0, 300);
ellipse(-500, 0, 300);

noFill();
rect(-1000, -230, 2000, -230);
rect(-1000, 230, 2000, 230);
// image(Sunpoints, -300, -300, 620, 620);
}

  function drawSideL(){
  push()
  translate(-500,0)
  rotate(pointRotation)
for(let i = 0; i < 12; i++){
  rotate (360/12)
  image(Sidepoint, -450/6, 90, size, size+50);
}
  pop()
}

  function drawSideR(){
  push()
  translate(500,0)
  rotate(pointRotation)
for(let i = 0; i < 12; i++){
  rotate (360/12)
 image(Sidepoint, -450/6, 90, size, size+50);
}
  pop()
}

  function drawMoon(){

  push()
  translate(0,0)
  rotate(minRotation)

  noStroke();
  fill('#fff9d1');
  ellipse(0, 0, 220);

  fill('#e8bfbe');
  ellipse(0, -20, 180);
  image(MinuteHand, -225, -225, 450, 450);
  pop()
}

function drawMins(){
  push()
for(let i = 0; i < 60; i++){
  rotate (360/60)
fill(255);
rect(0, 190, 0, 25);

}
  pop()
}

function drawHours(){
  push()
for(let i = 1; i < 12; i++){
  rotate (360/12)
fill(255);
rect(-0.5, 185, 1, 40);

}
  pop()
}

function drawHourhand(){

  push()
  translate(0, 0)
  rotate(hourRotation)

  for(let i = 0; i < 1; i++){

image(Star, -30 ,-510/2, 60, 85);
  pop()
}
}

}
}

