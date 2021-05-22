class Stage {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(210,369,100,150,options);
      this.width = 100;
      this.height = 150;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };