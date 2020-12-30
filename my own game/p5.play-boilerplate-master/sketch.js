var monster;

var obstaclesGroup,
 web, trapdoor, flames, spikeball, jumpboost, immunenity, speedboost;

var valuble;

var wall;

var power;

function preload(){
web = loadImage("web.jpg");
flames = loadImage("flames.jpeg");
trapdoor = loadImage("trapdoor.png");
spikeball = loadImage("spikeball.jpg");
jumpboost = loadImage("jumpboost.png");
speedboost = loadImage("speedboost.jpg");
immunenity = loadImage("immunenity.jpg");       
}

function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);

  monster = createSprite(150,150,70,70)
  obstaclesGroup = new Group();
}

function draw() {
  background(255,255,255);  
  spawnObstacles();
  drawSprites();

}





function spawnObstacles() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(300,165,60,40);
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(web);
              break;
      case 2: obstacle.addImage(flames);
              break;
      case 3: obstacle.addImage(trapdoor);
              break;
      case 4: obstacle.addImage(spikeball);
              break;
      case 5: obstacle.addImage(jumpboost);
              break;
      case 6: obstacle.addImage(immunenity);
             break;
      case 7: obstacle.addImage(speedboost);
      break;
      default: break;
}
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
     obstaclesGroup.add(obstacle);

}
}
