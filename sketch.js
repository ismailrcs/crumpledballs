
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,bin,ground,paperSprite,objectSprite;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperSprite = createSprite(200,200,50,50);


	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



  drawSprites();
 
}



