var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
movingRect=createSprite(50,350,70,70);
movingRect.shapeColor="blue";
}

function draw() {
  background(0);  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;



if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2&&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
else{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="blue";
}
  drawSprites();
}