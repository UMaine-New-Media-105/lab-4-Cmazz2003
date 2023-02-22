function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
addTriangle(30,75,58,20,86,75,100,0,100);
addEllipse(110,50,50,100,0,0,255);
addSquare(30, 90, 80,128,0,32);
}
function addTriangle(x1,y1,x2,y2,x3,y3,R,G,B){ 
push();
fill(R,G,B);
triangle(x1,y1,x2,y2,x3,y3);
pop();
}
function addEllipse(x,y,w,h,R,G,B){
push();
fill(R,G,B);
ellipse(x,y,w,h);
pop();
}
function addSquare(x,y,size,R,G,B){
push();
fill(R,G,B);
square(x,y,size);
pop();
}
