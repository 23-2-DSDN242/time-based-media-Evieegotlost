/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
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
  background(50); //  beige
  fill(200); // dark grey
  noStroke();
  textSize(40);
  textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
 

  Sunpoints = loadImage('assets/sunpoints.png');

  
  stroke('#ffffff');
  strokeWeight(2);
  noFill();


  ellipse(480, 250, 360);

  fill('#ebd294');
  ellipse(480, 250, 250);
  fill(50);
  ellipse(480, 225, 200);

  noFill();
  // ellipse(480, 700, 900, 900); 
  ellipse(1010, 250, 500);
  ellipse(-50, 250, 500);


  image(Sunpoints, 0, 0, 1000, 1000);
  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);

}
