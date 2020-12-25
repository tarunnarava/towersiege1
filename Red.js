class Red extends Box{
    constructor(x,y){
      super(x,y,20,40);
    //  this.image = loadImage("sprites/bird.png");
    }
    display(){
    //  this.body.position.x = mouseX;
    //  this.body.position.y = mouseY;
      fill(252,204,74);
      super.display();
    }
  }