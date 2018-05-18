/*

Designer Clock
(Take A Break)

by Theodor Marcu

marcu.theodor@gmail.com
tmarcu@princeton.edu

02/12/2018
*/


var flag = 0;
let creditText = "by Theodor Marcu \ntheodormarcu.com";

function setup() {
  createCanvas(1000, 1000);
  textSize(24);
  textFont('Helvetica');
}

function draw() {
  // Background
  background('#e74c3c');
  fill('white');
  textAlign(RIGHT);
  text(creditText, 975, 900);
  // Time vars
  let h = hour();
  let m = minute();
  let s = second();

	// Create white dial
  fill('white');
  strokeWeight(0);
  let xCenter = 500;
  let yCenter = 500;
  let circleWidth = 600;
  let circleHeight = 600;
  ellipse(xCenter, yCenter, circleWidth, circleHeight);

  // Math part behind clock
  angleMode(DEGREES);
  let hourWidth = 300;
  let thetaH = 180 - abs(0.5 * (60 * h + m));
  let circleRadius = circleWidth / 2 - hourWidth / 2;
  let xH = xCenter + circleRadius * sin(thetaH);
	let yH = yCenter + circleRadius * cos(thetaH);

  // Create Hour "Hand"
  fill('#e74c3c');
  ellipse(xH, yH, hourWidth, hourWidth);

  // Create Minute "Hand"
	let minuteWidth = 100
  let minuteCircleRadius = hourWidth / 2 - 50;
  let thetaM = 180 - abs(6 * m);
  let xM = xH + minuteCircleRadius * sin(thetaM);
  let yM = yH + minuteCircleRadius * cos(thetaM);
  fill('white');
  ellipse(xM, yM, minuteWidth, minuteWidth);

  // Create Second "Hand"
  let secondWidth = 25
  let secondCircleRadius = minuteWidth / 2 - 12.5;
  let thetaS = 180 - abs(6 * s);
  let xS = xM + secondCircleRadius * sin(thetaS);
  let yS = yM + secondCircleRadius * cos(thetaS);
  fill('#e74c3c');
  ellipse(xS, yS, secondWidth, secondWidth);

	// Create stop if mouse is moving
  if (mouseY !== pmouseY || mouseX !== pmouseX) {
   //  fill('#8e44ad');
  	// rect(0, 0, 1000, 1000);
   //  fill('white');
   //  textAlign(CENTER);
   //  text("You have to stop moving \n to understand time.", 500, 500);
  }
}
