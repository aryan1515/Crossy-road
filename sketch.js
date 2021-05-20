var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;

var carAnimation, logAnimation, playerAnimation;

function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //Grasses where player can rest
  for(var i=0;i<6;i++){
  
     var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "green";
  }
  //To create rows of car
   for(var i = 0; i < 40; i++){
     cars = new Car(2);
     carGroup1.add(cars.spt);
   }
  //To create rows of Logs
    for(var i = 0; i < 40; i++){
      log = new Log(-3);
      logGroup1.add(log.spt);
    }

   //create player
   player = new Player(width/2,height-75);
   
 }

function draw() {
  background("skyblue");
  //move the screen to location of player. Use translate. See hint
  
  //Making the cars re-apper
  
 
  drawSprites();
}


//Below write code for function keyPressed(). See hint.

