
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,400,35);

	bob1 = new Bob(550,220,70);
	bob2 = new Bob(570,220,70);
	bob3 = new Bob(590,220,70);
	bob4 = new Bob(610,220,70);
	bob5 = new Bob(630,220,70);

	Engine.run(engine);
  
}


function draw() {
	background(247);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



