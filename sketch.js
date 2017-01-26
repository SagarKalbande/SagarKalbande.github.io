function setup() {

  createCanvas(700,700);
  background(255,150,120)

}

function draw() {
	noStroke();
	
  if ((mouseX<400)&&(mouseX>200)) {
    fill(0,0,255,50);
  } 
  else if ((mouseX<600)&&(mouseX>400)){
    fill(255,0,0,50);
  }
  else if ((mouseX<700)&&(mouseX>600)){
    fill(0,255,0,50);
  }
  ellipse(mouseX, mouseY, 20, 20);
}