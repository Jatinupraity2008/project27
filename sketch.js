 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	 engine = Engine.create();
	 world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);

	bob1 = new Bob(200,500,80);
	bob2 = new Bob(280,500,80);
	bob3 = new Bob(360,500,80);
	bob4 = new Bob(440,500,80);
	bob5 = new Bob(520,500,80);

	roof = new Roof(350,200,500,30);
  
	rope1 = new Rope(bob1.body,roof.body,80,0);
	rope2 = new Rope(bob2.body,roof.body,80,0);
	rope3 = new Rope(bob3.body,roof.body,80,0);
	rope4 = new Rope(bob4.body,roof.body,80,0);
	rope5 = new Rope(bob5.body,roof.body,50,0);

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(9999);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
