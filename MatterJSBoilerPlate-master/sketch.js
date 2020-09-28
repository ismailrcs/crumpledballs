
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,bin,grnd;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,20)


     paper1= new Paper(100,100)
    
     //bin
     bin1 = new Bin(700,630,20,100,PI);
     bin2 = new Bin(600,600,100,20,PI/2);
     bin3 = new Bin(800,600,100,20,PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   ground.display();
   paper1.display();
   bin1.display();
   bin2.display();
   bin3.display();


   KeyPressed();

  drawSprites();
 
}

function KeyPressed(){


   if(keyCode === UP_ARROW){

   
     Matter.Body.applyForce(paper.body,paper.body.position,{x : 85, y : -85});



   }




}

