class Blue extends Box{
    constructor(x,y){
      super(x,y,20,40);
    //  this.image = loadImage("sprites/bird.png");
    }
    display(){
    //  this.body.position.x = mouseX;
    //  this.body.position.y = mouseY;
      fill(172,164,210);
      super.display();
    }
  }