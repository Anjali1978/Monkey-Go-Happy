  //to declare the variables 
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup;
  var score;
  var ground;
 
  var survivalTime; 

  function preload(){

   //to load the images/ animations  
    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

  }



  function setup() {

  //to create a canvas  
  createCanvas (600, 400);   

  //to had characteristics to the monkey 
  monkey= createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale= 0.1; 

  //to had characteristics to the ground 
  ground= createSprite(400, 350, 900, 10);
  

  //to create the food and obstacles group 
  FoodGroup= createGroup();
  obstacleGroup=createGroup();

  //to display the x position of the ground in the console log   
  console.log(ground.x);

  spawnB();
  spawnObstacles();

 



  }


  function draw() {

  //to make the background white   
  background ("white");

  //to make the ground never ending 
  ground.x= ground.width/2;
ground.velocityX= -4; 


  //to add gracity to the monkey 
  monkey.velocityY= monkey.velocityY + 0.8;  
  
     
    if(obstacleGroup.isTouching(monkey)){
    
      ground.velociyX= 0; 
    monkey.velocityX= 0; 
      obstacleGroup.setVelocityXEach(0); 
      FoodGroup.setVelocityXEach(0);
      survivalTime= 0; 
   obstacleGroup.setLifetimeEach(-1);
      FoodGroup.setLifetimeEach(-1);
    }

  // to set a condition of what happens when space is pressed   
  if(keyDown("space")){

   monkey.velocityY= -12;
  }
  //to set a condition of what happens when the monkey is touching the banana   
  if(monkey.isTouching(FoodGroup)){


  //to destroy the banana   
    FoodGroup.destroyEach();
  }
 
   //to add and display the survival time   
  survivalTime= Math.ceil(frameCount/ frameRate())
  text("Survival Time: " + survivalTime, 100,50);

  spawnB();
  spawnObstacles();

  monkey.collide(ground);


  drawSprites(); 
    }
 
  
  //to add functions to the FoodGroup 
  function spawnB(){

  if(frameCount%80=== 0){

  banana= createSprite(600,120,40,10);
  banana.y= Math.round(random(120, 200));
  banana.addImage(bananaImage);
  banana.scale= 0.1; 
  banana.depth= monkey.depth;
  monkey.depth= monkey.depth + 1; 
  banana.velocityX= -4; 
   banana.lifeTime=300; 

  FoodGroup.add(banana);

  }
  //to add functions to the obstacleGroup  

  
    }
    function spawnObstacles(){

    if(frameCount%300===0){  
    obstacle= createSprite(600,320);
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.lifeTime=300; 

    obstacle.scale= 0.13;
    obstacle.velocityX= -4; 

  } 
 
  

  }





