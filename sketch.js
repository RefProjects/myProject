var thunder, thunder1,thunder2, thunderAnimation;
var batman, batmanAnimation;
var bg;

function preload(){
    thunderAnimation = loadAnimation("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png");
    batmanAnimation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
}

function setup(){
    createCanvas(1200,700); 

   thunder = createSprite(600,140,10,10);
   thunder.addAnimation("thund",thunderAnimation);
   thunder.scale = 0.5;

   thunder1 = createSprite(100,140,10,10);
   thunder1.addAnimation("thund",thunderAnimation);
   thunder1.scale = 0.4;

   thunder2 = createSprite(1100,140,10,10);
   thunder2.addAnimation("thund",thunderAnimation);
   thunder2.scale = 0.4;

   batman = createSprite(100,530,10,10);
   batman.addAnimation("batmen",batmanAnimation);
   batman.scale = 0.5;

}

function draw(){

    background("lightSkyBlue");

    if(keyDown("UP_ARROW")){
        batman.velocityX = 2;
    }

    rainDrops();

    drawSprites();
}   

function rainDrops(){
    var drop = createSprite(random(10,1190),0,random(2,6),random(20,40));
    drop.shapeColor = color(random(0,255),random(0,255),random(0,225));
    drop.velocityY = random(2,6);

}