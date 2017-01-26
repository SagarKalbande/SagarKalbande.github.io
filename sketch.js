function setup() {

  createCanvas(600,600);
  background(255,150,120)

}

function draw() {
	noStroke();
	
  if ((mouseY<200)&&(mouseY>00)) {
    fill(255,153,51,50);
  } 
  else if ((mouseY<400)&&(mouseY>200)){
    fill(255,255,255,50);
  }
  else if ((mouseY<600)&&(mouseY>400)){
    fill(0,255,0,50);
  }
  ellipse(mouseX, mouseY, 200, 200);
}