class Tree {
    constructor(x, y) {
      
      this.x = x;
      this.y = y;
      this.dustbinwidth=450;
      this.dustbinheight=600;
      this.wallthickness=10;
      this.image=loadImage("tree.png")
     // this.angle=0;
      this.bottombody = Bodies.rectangle(this.x, this.y, this.dustbinwidth,this.wallthickness,{ isStatic:true} );
      this.leftwallbody = Bodies.rectangle(0,this.y- this.dustbinHeight/2, this.wallthickness,this.dustbinheight,{ isStatic:false} );
     
    //  Matter.Body.setAngle(this.leftwallbody,this.angle);

      this.rightwallbody = Bodies.rectangle(this.x+ this.dustbinwidth/2, this.y- this.dustbinheight/2,this.wallthickness,this.dustbinheight,{ isStatic:false} );
     
     // Matter.Body.setAngle(this.rightwallbody,-1*this.angle);
      World.add(world, this.bottombody);
      World.add(world, this.leftwallbody);
      World.add(world, this.rightwallbody);
    };
    display(){
      var posbottom = this.bottombody.position;
   
      push();
      translate(posbottom.x, posbottom.y+10);
      imageMode(CENTER)
      //angleMode(RADIANS)
      fill(255);
    //  rotate(angle);
      //stroke(255);
    //rotate(this.angle);
     // stroke('blue')
      //fill(255,0,255);
     
    image(this.image, 0, -this.dustbinheight/2,this.dustbinwidth, this.dustbinheight);
      pop();

      
      
    };
  };
  