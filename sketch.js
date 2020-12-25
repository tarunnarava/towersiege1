
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var engine,world;
var terrain,rostrum,rostrum2;
var blow,blow1,blow2,blow3,blow4;
var slingShot;
var polygon_img;


function preload()
{
	
	polygon_img=loadImage("polygon.png");
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
terrain=new Ground(600,650,5000,200);
rostrum=new Ground(700,200,200,10);
rostrum2=new Ground(390,300,250,10);


//rustrum1 blowssss :)
//floor1 :)
blow=new Red(300,275,30,40);
blow1=new Blue(330,275,30,40);
blow2=new Green(360,275,30,40);

blow3=new Red(390,275,30,40);
blow4=new Blue(420,275,30,40);
blow5=new Green(450,275,30,40);

blow6=new Red(480,275,30,40);

//floor2 :)
blow7=new Green(330,235,30,40);
blow8=new Blue(360,235,30,40);
blow9=new Red(390,235,30,40);
blow0=new Green(420,235,30,40);
blow11=new Red(450,235,30,40);


//floor3:)
blow12=new Green(360,195,30,40);
blow13=new Red(390,195,30,40);
blow14=new Blue(420,195,30,40);

blow15=new Red(390,155,30,40);

//rustom2:)
//flor1):
blow16=new Red(640,175,30,40);
blow17=new Blue(670,175,30,40);
blow18=new Green(700,175,30,40);
blow19=new Red(730,175,30,40);
blow20=new Blue(760,175,30,40);
blow21=new Green(670,135,30,40);
blow22=new Red(700,135,30,40);
blow23=new Blue(730,135,30,40);
blow24=new Green(700,95,30,40);


ball = Bodies.circle(50,200,20);
  World.add(world,ball);




  slingShot = new Slingshot(this.ball,{x:80,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(178,0,56);
  
terrain.display();
rostrum.display();
rostrum2.display();

//f;oor1
//rustom1:;:0)
blow.display();
blow1.display();
blow2.display();
blow3.display();
blow4.display();
blow5.display();
blow6.display();

//flll2:0)
blow7.display();
blow8.display();
blow9.display();
blow0.display();
blow11.display();

//floor3:)
blow12.display();
blow13.display();
blow14.display();
blow15.display();

//rustom2:)
blow16.display();
blow16.display();
blow17.display();
blow18.display();
blow19.display();
blow20.display();
blow21.display();
blow22.display();
blow23.display();
blow24.display();


slingShot.display();





imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,50,40);



  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
	slingShot.fly();
  }

