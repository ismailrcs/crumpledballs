class Bin {

   constructor(x, y, width, height, angle) {
      
      this.bin = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world, this.bin);

      Matter.Body.setAngle(this.bin, angle);

   }

   display(){


      var angle = this.bin.angle;
      translate(this.bin.position.x, this.bin.position.y);
      rotate(angle);



   }



}