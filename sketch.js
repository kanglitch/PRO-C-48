var xen,hraikurum,mushroom,mushroom_group,obstacle_group,obstacle,ground,harikurum_group;



function preload(){ 

}
function setup(){
  createCanvas(1536,600)
  ground = createSprite(1536,600,3000,20)
  
  ground.x = ground.width/2
  obstacle_group= new Group()
  mushroom_group= new Group()
 xen = createSprite(10,560,20,20)
 
 edges=createEdgeSprites()
 
  
    
}
function draw(){
  background(20,255,200)
  ground.velocityX = -6 ;
  if(ground.x < 0){
    ground.x = ground.width/2

  }
  xen.velocityY=xen.velocityY + 0.5;
  if(keyDown("space") && xen.y >= 560){
    xen.velocityY = -8 ;
  }
  if(xen.isTouching(mushroom_group)){
    ground.velocityX=10
  }else{
    ground.velcoityX=-6
  }
  
  xen.collide(ground);
  spawnharikurum();
  spawnobstacle();
  spawnmushrooms();
drawSprites();
}
function spawnobstacle(){
  if(frameCount % 100===0){
    obstacle = createSprite(1500,580,20,20);
    obstacle.velocityX = -6;
    obstacle_group.add(obstacle)
    obstacle.lifetime=290
    


  }
}
function spawnmushrooms(){
  if(frameCount % 500===0){
    mushroom= createSprite(1500,580,40,40);
    mushroom.velocityX = -6;
    mushroom_group.add(obstacle)
    mushroom.lifetime=290
    

  }
}

function spawnharikurum(){
if(frameCount % 1100===0){
  harikurum= createSprite(1500,580,20,20)
  harikurum.velocityX = -6;
  harikurum_group.add(obstacle)
  harikurum.lifetime=290

}

}
