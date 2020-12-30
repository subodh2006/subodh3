class Box {
    constructor(x, y, width, height) {
      var options = {
        'isStatic': false,
          'restitution':0.3,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 4.5){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke("black");
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
      }

      else{
        World.remove(world, this.body);
        push();
       this.Visiblity = this.Visiblity - 3;
        tint(255,this.Visiblity);
       // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      
    }
    score(){
      if(this.Visiblity<0){
        score  = score+1;
      }
    }
   
   
   }
  

  