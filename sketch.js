
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;



function preload()
{
boy=loadImage("boy.png");	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneobj=new Stone(235,420,30);
mango1=new Mango(1100,100,30);
mango2=new Mango(1170,130,30);
mango3=new Mango(1010,140,30);
mango4=new Mango(1000,70,30);
mango5=new Mango(1100,70,30);
mango6=new Mango(1000,230,30);
mango7=new Mango(900,230,40);
mango8=new Mango(1140,150,40);
mango9=new Mango(1100,230,40);
mango10=new Mango(1200,200,40);
mango11=new Mango(1120,50,40);
mango12=new Mango(900,160,40);

treeobj=new Tree(1050,580);
groundobj=new Ground(width/2,600,width,20);
launcherobj=new launcher(stoneobj.body,{x:235,y:420});

var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
	width:1300,
	height:600,
	wireframes:false	
	}
})



	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
  textSize(25);
  text("PRESS SPACE",50,50);
  image(boy,200,340,200,300);
  treeobj.display();
  stoneobj.display();
  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango3.display();
  mango12.display();
  mango6.display();
 
  groundobj.display();
launcherobj.display();
detectcollision(stoneobj,mango1)
detectcollision(stoneobj,mango2)
detectcollision(stoneobj,mango3)
detectcollision(stoneobj,mango4)
detectcollision(stoneobj,mango5)
detectcollision(stoneobj,mango6)
detectcollision(stoneobj,mango7)
detectcollision(stoneobj,mango8)
detectcollision(stoneobj,mango9)
detectcollision(stoneobj,mango10)
detectcollision(stoneobj,mango11)
detectcollision(stoneobj,mango12)
  ////drawSprites();
 
}
function mouseDragged(){
 // if (gameState!=="launched"){
      Matter.Body.setPosition(stoneobj.body, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
  launcherobj.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneobj.body, {x:235 , y: 420});

   launcherobj.attach(stoneobj.body);
  }
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
  {
  Matter.Body.setStatic(lmango.body,false)
}
}

