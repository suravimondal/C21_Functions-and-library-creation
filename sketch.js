var fixedRect, movingRect;
var wall, car;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

car= createSprite(200,100,50,50);
car.shapeColor= "blue";
car.velocityX= 3;

wall= createSprite(500,100,20,100);
wall.shapeColor= "white";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(IS_Touching(car,wall)){
    car.shapeColor= "red";
fill("yellow");
textSize(40);
text("TOUCHED!!",200,300);
}

  BOUNCE_OFF(car, wall);
  drawSprites();
}

