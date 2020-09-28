class Ground {
    constructor(x,y,width,height) {
      var options1 = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options1);
      this.width = width;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(x,y,width,height);
    }
  };