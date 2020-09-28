 class Paper {

  constructor(x,y,width,height){

   var options = {
  
  isStatic : false,  
  restitution : 0.3,
  friction : 0.5,
  denstity : 1.2

   } 
   this.paper = Matter.Bodies.circle(200,680,20,options)
   World.add(world,this.paper);
   this.width = 20;
   this.height = 20;

  }

    display(){

      this.paper.positionX = 200;
      this.paper.positionY = 600;
      fill("white")
      ellipse(100,630,20,20);

    }



 }