var bullet,thickness
var wall,wallImg
var speed,weight
var bulletImg
var strongwallImg
var brokenwallImg

function preload(){
  wallImg = loadAnimation("wall.png")
  brokenwallImg = loadAnimation("brokenwall.png")
  bulletImg = loadImage("bullet.png")
  strongwallImg = loadImage("strong.png")
}

function setup() {
  createCanvas(1600,400);
 
 
  thickness=random(22,83)
  bullet = createSprite(50, 200, 50, 50);
  bullet.addImage(bulletImg)
  bullet.scale=0.4
  wall=createSprite(1200,200,thickness,height/2)
  bullet.setCollider("circle",20,0,100)
  wall.setCollider("circle",0,0,200)
  wall.addAnimation("wall",wallImg)
  wall.addAnimation("broken",brokenwallImg)
  speed=random(223,321)
  bullet.velocityX = speed
  weight=random(30,52)
    
}

function draw() {
  background("green"); 
  drawSprites();

   if(collide(bullet,wall)){
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
     
     bullet.velocityX=0
     bullet.x=1000
     
     if(damage<10) {
      var strongwall = createSprite(1150,180,50,50) 
      strongwall.addImage(strongwallImg)
     }
     
     if(damage>10) {
      wall.changeAnimation("broken",brokenwallImg)
      wall.scale=0.5
    } 
     
   }
 
 
}


  
  function collide(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width
    wallLeftEdge=lwall.x
    if(bulletRightEdge>=wallLeftEdge) 
      return true     
    else
      return false
        
  }
