var brownRed = 70;
var brownGreen = 50;
var brownBlue = 50;

var eyeWhite = 500;

var pinkRed = 150;
var pinkGreen = 0;
var pinkBlue = 60;

var pupilBlack = 0;



function setup() {
  createCanvas(3000,3000);
  background(50,100,100);
  
}

function draw() {
  fill(brownRed, brownGreen, brownBlue);//brown colour for body
  ellipse(500,500,250,250);//main body
  ellipse(485,320,150,150);//Head
  ellipse(445,230,50,50);//left ear
  ellipse(525,230,50,50);//right ear
  ellipse(390,480,70,70);//left paw
  ellipse(610,480,70,70);// right paw
  ellipse(435,600,85,85);//left foot
  ellipse(550,600,85,85);//right foot
  fill(eyeWhite);//whites of eyes
  ellipse(460,300,40,40);//left eye
  ellipse(510,300,40,40);// right eye
  fill(pinkRed, pinkGreen, pinkBlue);//pink colour for nose
  ellipse(485,330,20,20);//nose
  ellipse(435,615,40,40);//big circle left foot
  ellipse(550,615,40,40);//big circle right foot
  ellipse(410,585,20,20);//little circle left foot 1
  ellipse(432,575,20,20);//little circle left foot 2
  ellipse(455,585,20,20);//little circle left foot 3
  ellipse(525,585,20,20);//little circle right foot 1
  ellipse(547,575,20,20);//little circle right foot 2
  ellipse(570,585,20,20);//little circle right foot 3
  fill(pupilBlack);//blacks of eyes
  ellipse(465,300,20,20);// left pupil
  ellipse(515,300,20,20);// right pupil

  
  
}
