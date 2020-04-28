const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var score = 0;
var bubble1;
var bubbles = [];
var shooter;
var bullet;
var x1 = 600;
var y1  = 380;
var x2 = 627;
var y2 = 340;
var x3 = 650;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i <15;i++){
        bubbles[i] = new Bubble();
    }
  
}

function draw(){
   background(51);
        noStroke();
        textSize(35)
       
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);

   for(var i = 0; i < bubbles.length;i++ ){
bubbles[i].move();
bubbles[i].display();
   }
        if (keyIsDown(LEFT_ARROW)) {
            x1 -=5;
            x2 -=5;
            x3 -=5;
         
        }
        if (keyIsDown(UP_ARROW)) {
            y1 -=5;
            y2 -=5;
           
         
        }

        if (keyIsDown(DOWN_ARROW)) {
         createBullet()  ;
            
         
        }
          
fill('red');
shooter = triangle(x1,y1,x2,y2,x3,y1);
   
}

function Bubble(){
    this.x  = random(0,width);
    this.y  = random(0,height);
    
    this.display = function(){
        stroke(255);
        fill(255,0,150,50);
        bubble1 = ellipse(this.x ,this.y ,24,24);
    }

    this.move = function(){
        this.x = this.x + random(1,-1);
        this.y = this.y + random(1,-1);
    }
}

function createBullet(){
  
 fill(255, 204, 100);
bullet = rect(x2-6,y2-15,10,20); 
 
    

}

