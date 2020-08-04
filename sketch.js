var wall,thicknss;
var bullet,speed,weight;

const newLocal = bullet.velocityX = speed;
function setup() {
  createCanvas(1600,400);

  speed = random(13,11);
  weight = random(30,52);
  
  thickness = random(42,83);

  bullet = createSprite(10,200,20,10);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor = color(80,80,80);
}

function draw() {
  background(0,0,0);  

  bullet.display();
  wall.display();

  if(collision(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10) {
      wall.shapecolor = color(225,0,0);
    }
    if(damage<10) {
      wall.shapecolor = color(0,225,0);
    }
  }
  drawSprites();
}

  function collision(wall1,bullet1) {
    bulletRightEdge = bullet1.x+bullet1.width;
    wallLeftEdge = wall1.x;

    if(bulletRightEdge>=wallLeftEdge) {
      return true;
    }
    return false;
  }