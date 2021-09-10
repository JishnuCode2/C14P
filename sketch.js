var bow , arrow,  scene, balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

var ammo = 1;




function preload(){
// loading the images.
      backgroundImage = loadImage("background0.png");

      arrowImage = loadImage("arrow0.png");

      bowImage = loadImage("bow0.png");

      red_balloonImage = loadImage("red_balloon0.png");

      green_balloonImage = loadImage("green_balloon0.png");

      pink_balloonImage = loadImage("pink_balloon0.png");

      blue_balloonImage = loadImage("blue_balloon0.png");
      
}






function setup() {
//creating the canvas
      createCanvas(400, 400);
      
//creating background
      scene = createSprite(0,0,400,400);
      scene.addImage(backgroundImage);
      scene.scale = 2.5;
      
// creating bow to shoot arrow
      bow = createSprite(380,220,20,50);
      bow.addImage(bowImage); 
      bow.scale = 1;
      
      score = 0    
}





function draw() {
//drawing the background
     background(0);

// moving ground
     scene.velocityX = -3 

     if (scene.x < 0){
          scene.x = scene.width/2;
      }
      

//moving bow
      bow.y = World.mouseY
      

// release arrow when space key is pressed
      if(keyDown("space") && ammo === 1){
        
          createArrow();
          ammo = 0;
      } 
      


      createBalloons();


// displaying the sprites on the skin
      drawSprites();

//showing the score
      textSize(20) ;
      text("Score: "+ score, 300,50);

      if(frameCount%50 === 0 && ammo === 0){
            textSize(20);
            text("Reloaded",300,350);
            ammo = 1;
      }
}












// Creating  arrows for bow
function createArrow() {
      var arrow= createSprite(100, 100, 60, 10);
      arrow.addImage(arrowImage);
      arrow.x = 360;
      arrow.y=bow.y;
      arrow.velocityX = -4;
      arrow.lifetime = 100;
      arrow.scale = 0.3;
}


function createBalloons() {
//creating the balloons
   balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
      balloon.velocityX = 3;
      balloon.lifetime = 150;
      balloon.scale = 0.1;


//creating continous enemies
      var rand = Math.round(random(1,4));

      if (World.frameCount % 100 == 0) {
          switch(rand) {

            case 1 : balloon.addImage(red_balloonImage);
            break;

            case 2 : balloon.addImage(green_balloonImage);
            break;

            case 3 : balloon.addImage(pink_balloonImage);
                     balloon.scale = 1.5;
            break;

            case 4 : balloon.addImage(blue_balloonImage);
            default : break ;
          }
     
     
     }    
}



