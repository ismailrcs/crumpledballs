 class Paper {

  constructor(){

   var options = {
  
  isStatic : false,  
  restitution : 0.3,
  friction : 0.5,
  denstity : 1.2

   } 

   
    this.paper = Bodies.circle(200,600,20,options)
	World.add(world,this.paper);
    

   

   


  }



 }