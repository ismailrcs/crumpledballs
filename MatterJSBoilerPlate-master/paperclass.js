 class Paper {

  constructor(x,y){


    var options = {

     isStatic : false,
     restitution : 0.3,
     density : 1.2,
     friction : 0.5


    }
   
   this.paper = Matter.Bodies.circle(x,y,20,options)
  this.radius = 20;
   World.add(world,this.paper);
   

  }

    display(){

     var posx = this.paper.position.x;
     var posy = this.paper.position.y;      
      fill("white")
      ellipseMode(RADIUS);
      ellipse(posx,posy,this.radius);

    }

  

 }