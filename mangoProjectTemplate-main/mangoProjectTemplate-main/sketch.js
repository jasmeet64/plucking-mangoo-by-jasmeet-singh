
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1 ,mango2,mango3 ;
var world,boy;
var stone1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,150,30);
	mango3=new mango(1200,200,20);
	stone1=new stone(230,350,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stone1.body,{x:230,y:350});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone1.display();
launcherObject.display();

  groundObject.display();
}
function mouseDragged() {
	 Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) }
	 function mouseReleased() { 
	 launcherObject.fly();
	 // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y)); 
	}
 