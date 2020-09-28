
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,bin,grnd;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,650,800,20)


     paper1= new Paper(100,100,20)
	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   paper1.display();

  drawSprites();
 
}



