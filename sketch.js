
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2;
var rotator1, rotator2, rotator3;
var ground; 
var particle1, particle2, particle3, particle4, particle5;
var angle1 = 180;
var angle2 = 190;
var angle3 = 234;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var plane_otpions={
		isStatic: true
	}
	 
	//block1
	block1 = Bodies.rectangle(150, 440, 250, 15, {isStatic: true});
    World.add(world, block1);

	//block2
	block2 = Bodies.rectangle(650, 440, 250, 15, {isStatic: true});
    World.add(world, block2);

    //ground
	ground = Bodies.rectangle(400, 692, 801, 19, {isStatic: true});
    World.add(world, ground);
   
	//rotator1
    rotator1 = Bodies.rectangle(400, 200, 180, 20, {isStatic: true});
    World.add (world,rotator1);
    
	//rotator2
	rotator2 = Bodies.rectangle(400, 200, 20, 180, {isStatic: true});
    World.add (world,rotator2);

    //rotator3
    rotator3 = Bodies.rectangle(400, 200, 180, 20, {isStatic: true});
    World.add (world,rotator3);
 
	//particle fisic
   var particle_options = {
	   restitution: 0.4,
	   friction: 0.02
	}

	//particle1
	particle1 = Bodies.circle(350, 5, 13, particle_options);
	World.add (world, particle1);

	//particle2
	particle2 = Bodies.circle(350, 10, 13, particle_options);
	World.add (world, particle2);

	//particle3
	particle3 = Bodies.circle(350, 1, 13, particle_options);
	World.add (world, particle3);

	//particle4
	particle4 = Bodies.circle(350, 3, 13, particle_options);
	World.add (world, particle4);

	//particle2
	particle5 = Bodies.circle(350, 6, 13, particle_options);
	World.add (world, particle5);
	
	rectMode(CENTER);

}


function draw() {

  background(rgb(247, 236, 222));
  Engine.update(engine);

  rect(block1.position.x, block1.position.y, 250, 15);
  rect(block2.position.x, block2.position.y, 250, 15);
  rect(ground.position.x, ground.position.y, 801, 19);

  ellipse(particle1.position.x, particle1.position.y, 25);
  ellipse(particle2.position.x, particle2.position.y, 25);
  ellipse(particle3.position.x, particle3.position.y, 25);
  ellipse(particle4.position.x, particle4.position.y, 25);
  ellipse(particle5.position.x, particle5.position.y, 25);

  //make the rotators spin
   //rotator1
    push()
    translate(rotator1.position.x, rotator1.position.y);
    rotate(angle1);
    rect(0, 0, 180, 20);
    pop()
    angle1 += 16;
    Body.rotate(rotator1, angle1);
   //rotator2
   push()
   translate(rotator2.position.x, rotator2.position.y);
   rotate(angle2);
   rect(0, 0, 20, 180);
   pop()
   angle2 += 5;
   Body.rotate(rotator2, angle2);
   //rotator3
   push()
   translate(rotator3.position.x, rotator3.position.y);
   rotate(angle3);
   rect(0, 0, 180, 20);
   pop()
   angle3 += 57;
   Body.rotate(rotator3, angle3);

}




