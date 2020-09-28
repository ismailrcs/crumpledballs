class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.grnd = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.grnd);
    }
    display(){
      var pos =this.grnd.position;
       
      
      rectMode(CENTER);
      fill("white");
      rect(pos.x,pos.y,this.width,this.height);
    }
  };