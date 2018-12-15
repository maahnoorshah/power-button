var Cx, Cy;
var Diameter =300;
var Radius =Diameter/2;

colorMode(HSB,360,100,100);  
	background(0,0,0);
	rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  rSlider.size(100,10);
  
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  gSlider.size(100,10);
  
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  bSlider.size(100,10);
	
	

function setup() {
	createCanvas(windowWidth, windowHeight);
	Cx= windowWidth/2;
	Cy= windowHeight/2;
	
	angleMode(DEGREES);  //Angle are expressed in degrees (360 deg in a circle);
	
	//Define color by Hue Saturation, Brightness
	//Hue goes from 0 360;
	//Saturation and Brightness go from 0 to 100
	
	colorMode(HSB,360,100,100);  
	
}

function draw() {
	background(0,0,0);
	
	noFill();
	strokeWeight(4);
  stroke(30,50,50)
	ellipse(Cx, Cy, Diameter, Diameter);
	
	DrawHSB_ellipse(0,100,100,Radius);
	
	// A clock face has 12 value
	// 360/12 is 30 degrees
	
	DrawHSB_ellipse(30,100,100,Radius);
	DrawHSB_ellipse(60,100,100,Radius);
	DrawHSB_ellipse(90,100,100,Radius);
	DrawHSB_ellipse(120,100,100,Radius);
	DrawHSB_ellipse(150,100,100,Radius);
	DrawHSB_ellipse(180,100,100,Radius);
	DrawHSB_ellipse(210,100,100,Radius);
	DrawHSB_ellipse(240,100,100,Radius);
	DrawHSB_ellipse(270,100,100,Radius);
	DrawHSB_ellipse(300,100,100,Radius);
	DrawHSB_ellipse(330,100,100,Radius);

	

	
	DrawHSB_ellipse(30,100,100,Radius/2);
	DrawHSB_ellipse(60,100,100,Radius/2);
	DrawHSB_ellipse(90,100,100,Radius/2);
	DrawHSB_ellipse(120,100,100,Radius/2);
	DrawHSB_ellipse(150,100,100,Radius/2);
	DrawHSB_ellipse(180,100,100,Radius/2);
	DrawHSB_ellipse(210,100,100,Radius/2);
	DrawHSB_ellipse(240,100,100,Radius/2);
	DrawHSB_ellipse(270,100,100,Radius/2);
	DrawHSB_ellipse(300,100,100,Radius/2);
	DrawHSB_ellipse(330,100,100,Radius/2);
	DrawHSB_ellipse(0,100,100,Radius/2);


	DrawHSB_ellipse(frameCount%360,100,100,Radius/4);
	DrawHSB_ellipse(frameCount%360,100,100,Radius/2);
	DrawHSB_ellipse(frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(30+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(60+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(90+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(120+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(150+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(180+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(210+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(240+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(270+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(300+frameCount%360,100,100,Radius/2.70);
	DrawHSB_ellipse(330+frameCount%360,100,100,Radius/2.70);
}

//DrawHSB_ellipse 
//Draws an ellipse at a given Angle and Radius
//from the center of the monitor
//The color of the ellipse is hue angle corresponding to the radius

function DrawHSB_ellipse(HueAng,Sat,Brightness,Rad) {
	colorMode(HSB,360,100,100);   //probably not needed since 
		                            // color mode is declared in
	                              // set up
	                              // but by included this line
	                              // function will work even if
	                              // main is in RGB mode
	
  var Xpos = Cx + Rad*cos(HueAng);   //Get the X and Y value of ellipse
	var Ypos = Cy + Rad*sin(HueAng);
	fill(HueAng,Sat,Brightness);        // Set color with same angle
	noStroke();
	ellipse(Xpos,Ypos, 20,20);          //Draw ellipse
	
}
