function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
addTriangle(30,75,58,20,86,75);
addEllipse(110,50,50,100)
addSquare(30, 90, 80);
}
function addTriangle(x1,y1,x2,y2,x3,y3){ 
push();
//fill(100,0,100);
triangle(x1,y1,x2,y2,x3,y3);
pop();
}
function addEllipse(x,y,w,h){
push();
//fill(0,0,255);
ellipse(x,y,w,h);
pop();
}
function addSquare(x,y,size){
push();
//fill(128,0,32)
square(x,y,size);
pop();
}
