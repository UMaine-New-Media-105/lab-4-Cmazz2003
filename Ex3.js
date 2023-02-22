function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  //draw avatar nft
  if (mouseIsPressed){
  translate(100,100)
  scale(5)
  ellipse(35,6,10); 
  ellipse(5, 6, 10);
  ellipse(20, 20, 30);
  fill("black")
  ellipse(15, 15, 5);
  ellipse(25, 15, 5);
  fill("maroon")
  ellipse(20, 25, 20, 10);
  fill("darkorchid")
  ellipse(20, 28, 15, 10);
  
  }else{
  
  }
  
  translate(100,100);
  scale(5);
  //if (mouseX > 200) {
  //fill("darkolivegreen");
  //} else {
  //fill("goldenrod");
  //}

  if (mouseX > 200) {
    fill("palegoldenrod");
  } else {
    fill("darkorchid");
  }
  ellipse(35, 18, 5);
  ellipse(5, 18, 5);
  ellipse(20, 20, 30);
  fill("black");
  ellipse(15, 15, 5);
  ellipse(25, 15, 5);
  ellipse(20, 25, 20, 10);
  fill("pink");
  ellipse(20, 28, 15, 10);
}
