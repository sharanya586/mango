
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;

function preload()
{
	boy = loadImage('Images/boy.png')
	tree = loadImage('Images/tree.png');
}

function setup() {
	createCanvas(1360, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(1080,620,2360,50);
ground1= new Ground(200,200,500,20)
	mango1 = new Mango(900,340,10);
	mango2 = new Mango(1100,340,10);
	mango3 = new Mango(1000,210,10);
	mango4 = new Mango(1000,340,10);

	stone = new Stone(40,450,50,50);
	chain = new Chain(stone.body, { x: 110, y: 460});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210,210,210);

  detectColision(stone,mango1);
  detectColision(stone,mango2);
  detectColision(stone,mango3);
  detectColision(stone,mango4);
  
  image(boy,80,380,200,300);
  image(tree, 800, 50,400, 700);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  ground.display();
  chain.display();
  ground1.display();
 
  drawSprites();
 
}

function detectColision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= mango.r + stone.r){
		Matter.Body.setStatic(mango.body, false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:40, y:450})
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	chain.fly();
}