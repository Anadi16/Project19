var park,parkImage;
var hero,heroImage;
var coin,coinImage,coinGroup;
var invisibleGround;
var fire,fireImage,fireGroup;
var gameOver,gameOverImage;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var score = 0;


function preload(){
  
  parkImage = loadImage("park.jpg");
  heroImage = loadImage("hero2-1.jpg");
  coinImage = loadImage("coin.jpg");
  fireImage = loadImage("fire.jpg");
  gameOverImage = loadImage("game.jpg")
  
  coinGroup = new Group();
  fireGroup = new Group();
  
}
function setup(){
  
  createCanvas(600,400);
  
  park = createSprite(350,80,30,30);
  park.addImage(parkImage);
  park.scale = 4;

  hero = createSprite(150,300,20,20);
  hero.addImage(heroImage);
  

  invisibleGround = createSprite(250,333,700,10);
  invisibleGround.visible = false;
  
  
 
  hero.debug = true;
  
}
function draw()
{
  background("white");
  
  if(gameState === PLAY){
  park.velocityX = -2;
  
  if(park.x < 0){
  
    park.x  = park.width/2;
  }
    
          if(keyDown("space")  && hero.y >= 290){
        hero.velocityY = -12;
       
    }
    
      hero.velocityY = hero.velocityY + 0.7;
  
  if(coinGroup.isTouching(hero)){
    score = score + 1;
  coinGroup.destroyEach();
  }
    
            fireBall()
        coins();
    
      if(fireGroup.isTouching(hero)){
        park.velocityX = 0;
         gameState = END;
         hero.destroy();
         coinGroup.destroyEach();
         fireGroup.setVelocityXEach(0);


        
   
}

    
  }
  
   
  
  else if(gameState === END){
    
  gameOver = createSprite(330,200,20,20);
  gameOver.addImage(gameOverImage);
  gameOver.scale = 2.8;
}
  
  

  
 hero.collide(invisibleGround); 
  
drawSprites();

  fill("black");
  textSize(20);
  text("Score " + score,400,20);
  
 
}

function coins(){
 if(frameCount % 350 === 0){
   
  coin = createSprite(600,300,20,20);
  coin.addImage(coinImage);
  coin.scale = 0.2;
  coin.velocityX = -4;
  coin.debug = true;
  coin.y = Math.round(random(270,300));
   
   coinGroup.add(coin);
  
 }
  

}

function fireBall(){
  if(frameCount % 150 === 0){
  fire = createSprite(600,300,20,20);
  fire.addImage(fireImage);
  fire.scale = 0.3;
  fire.velocityX = -5;
    
  
    
  fireGroup.add(fire);
}

}










