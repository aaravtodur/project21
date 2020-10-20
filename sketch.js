var movingRect,fixedRect;


function setup() {
  createCanvas(1200,900);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="green"
 fixedRect.velocityY=5;

  movingRect = createSprite(200, 600, 80, 30);
  movingRect.shapeColor="green"
  //movingRect.velocityY=-5;
  gameObject1 = createSprite(500, 100, 50, 50);
   gameObject1.shapeColor = "green";
   
   gameObject2 = createSprite(400, 800, 80, 50);
    gameObject2.shapeColor = "green";
    gameObject2.velocityY = -5;

    gameObject3 = createSprite(300, 100, 50, 50); 
    gameObject3.shapeColor = "green";
    
    gameObject4 = createSprite(400, 100, 50, 50);
     gameObject4.shapeColor = "green"
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  

  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
  { movingRect.velocityX = movingRect.velocityX * (-1); fixedRect.velocityX = fixedRect.velocityX * (-1); }

  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
    { movingRect.velocityY = movingRect.velocityY * (-1); fixedRect.velocityY = fixedRect.velocityY * (-1); }
  */
  if(isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor="red"
    movingRect.shapeColor="red"

  }

  else{
    gameObject1.shapeColor="green"
    movingRect.shapeColor="green"
  }
bounceoff(gameObject2,fixedRect);

    drawSprites();
}
